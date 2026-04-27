import {randomUUID} from 'node:crypto';
import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '@next-nest-turbo-auth-boilerplate/db';
import {
  type CompetitorPrice,
  type CreateMonitoringJobDto,
  type MonitoringJob,
  type MonitoringJobStep,
  type RecommendationDecision,
  type RecommendationSummary,
} from '@next-nest-turbo-auth-boilerplate/shared';
import {OtaMockAdapter} from './ota-mock.adapter';
import {OtaScriptAdapter} from './ota-script.adapter';
import {RecommendationEngineService} from './recommendation-engine.service';

type StoredMonitoringJob = {
  id: string;
  hotelId: string;
  roomTypeId: string;
  startedAt: Date;
  completedAt?: Date;
  fetchSource: 'live' | 'mock';
  recommendationId: string;
  recommendation: RecommendationSummary;
};

const workflowDurations = [800, 1600, 2400, 3200] as const;

@Injectable()
export class MonitoringJobsService {
  private readonly jobs = new Map<string, StoredMonitoringJob>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly scriptAdapter: OtaScriptAdapter,
    private readonly mockAdapter: OtaMockAdapter,
    private readonly recommendationEngine: RecommendationEngineService,
  ) {}

  async createJob(payload: CreateMonitoringJobDto): Promise<MonitoringJob> {
    const roomType = await this.prisma.roomType.findUnique({
      where: {id: payload.roomTypeId},
      include: {hotel: true},
    });

    if (!roomType || roomType.hotelId !== payload.hotelId) {
      throw new NotFoundException('Room type not found');
    }

    const now = new Date(Date.now());
    const checkInDate = formatCompactDate(addDays(now, 1));
    const checkOutDate = formatCompactDate(addDays(now, 2));

    let competitors: CompetitorPrice[];
    let fetchSource: 'live' | 'mock' = 'live';

    try {
      competitors = await this.scriptAdapter.fetchCompetitorPrices({
        hotelName: roomType.hotel.name,
        roomTypeName: roomType.name,
        checkInDate,
        checkOutDate,
      });
    } catch {
      fetchSource = 'mock';
      competitors = await this.mockAdapter.getCompetitorPrices({
        hotelName: roomType.hotel.name,
        roomTypeName: roomType.name,
        currentPrice: roomType.currentPrice,
      });
    }

    const generatedRecommendation = this.recommendationEngine.generate({
      currentPrice: roomType.currentPrice,
      unsoldRooms: roomType.unsoldRooms,
      competitors,
    });

    const persistedRecommendation = await this.prisma.pricingRecommendation.create({
      data: {
        hotelId: roomType.hotelId,
        roomTypeId: roomType.id,
        currentPrice: generatedRecommendation.currentPrice,
        suggestedPrice: generatedRecommendation.suggestedPrice,
        unsoldRooms: generatedRecommendation.unsoldRooms,
        reason: generatedRecommendation.reason,
        competitorData: generatedRecommendation.competitors as never,
      },
    });

    const job: StoredMonitoringJob = {
      id: randomUUID(),
      hotelId: roomType.hotelId,
      roomTypeId: roomType.id,
      startedAt: now,
      fetchSource,
      recommendationId: persistedRecommendation.id,
      recommendation: mapRecommendationSummary({
        ...persistedRecommendation,
        decidedAt: persistedRecommendation.decidedAt ?? undefined,
      }),
    };

    this.jobs.set(job.id, job);

    return buildJobSnapshot(job);
  }

  async getJob(jobId: string): Promise<MonitoringJob> {
    const job = this.jobs.get(jobId);
    if (!job) {
      throw new NotFoundException('Monitoring job not found');
    }

    return buildJobSnapshot(job);
  }

  async submitDecision(
    recommendationId: string,
    decision: RecommendationDecision,
  ): Promise<RecommendationSummary> {
    const decisionStatus = decision === 'accepted' ? 'ACCEPTED' : 'REJECTED';
    const now = new Date(Date.now());
    const updatedRecommendation = await this.prisma.pricingRecommendation.update({
      where: {id: recommendationId},
      data: {
        decisionStatus,
        decidedAt: now,
      },
    });

    if (decision === 'accepted') {
      await this.prisma.roomType.update({
        where: {id: updatedRecommendation.roomTypeId},
        data: {currentPrice: updatedRecommendation.suggestedPrice},
      });
    }

    const summary = mapRecommendationSummary({
      ...updatedRecommendation,
      decidedAt: updatedRecommendation.decidedAt ?? undefined,
    });
    const job = [...this.jobs.values()].find(candidate => candidate.recommendationId === recommendationId);
    if (job) {
      job.completedAt = updatedRecommendation.decidedAt ?? now;
      job.recommendation = summary;
    }

    return summary;
  }
}

function buildJobSnapshot(job: StoredMonitoringJob): MonitoringJob {
  const elapsed = job.completedAt
    ? workflowDurations[3]
    : Math.max(0, Date.now() - job.startedAt.getTime());
  const steps = buildWorkflowSteps(job, elapsed);
  const currentStep = steps.find(step => step.status === 'running')?.key ?? 'waiting_user_confirmation';
  const isCompleted = Boolean(job.completedAt);
  const isWaitingConfirmation = !isCompleted && elapsed >= workflowDurations[3];

  return {
    id: job.id,
    hotelId: job.hotelId,
    roomTypeId: job.roomTypeId,
    status: isCompleted ? 'completed' : (isWaitingConfirmation ? 'waiting_confirmation' : 'running'),
    currentStep,
    startedAt: job.startedAt.toISOString(),
    completedAt: job.completedAt?.toISOString(),
    recommendationId: job.recommendationId,
    recommendation: isCompleted || isWaitingConfirmation ? job.recommendation : undefined,
    steps,
  };
}

function buildWorkflowSteps(job: StoredMonitoringJob, elapsed: number): MonitoringJobStep[] {
  const stageIndex
    = elapsed < workflowDurations[0]
      ? 0
      : elapsed < workflowDurations[1]
        ? 1
        : elapsed < workflowDurations[2]
          ? 2
          : elapsed < workflowDurations[3]
            ? 3
            : 4;
  const isCompleted = Boolean(job.completedAt);

  const stepDefinitions: Array<{
    key: MonitoringJobStep['key'];
    message: string;
    source: MonitoringJobStep['source'];
  }> = [
    {key: 'check_inventory', message: '正在检查本店库存', source: 'system'},
    {key: 'fetch_competitor_prices', message: '正在抓取附近酒店价格', source: job.fetchSource},
    {key: 'calculate_market_average', message: '正在计算竞品均价', source: 'system'},
    {key: 'generate_recommendation', message: '正在生成调价建议', source: 'system'},
    {key: 'waiting_user_confirmation', message: '等待用户确认', source: 'system'},
  ];

  return stepDefinitions.map((step, index) => {
    if (isCompleted && index === 4) {
      return {
        key: step.key,
        status: 'done',
        message: step.message,
        source: step.source,
        startedAt: stepStartedAt(job.startedAt, index).toISOString(),
        completedAt: stepCompletedAt(job, index).toISOString(),
      } satisfies MonitoringJobStep;
    }

    if (index < stageIndex) {
      return {
        key: step.key,
        status: index === 1 && job.fetchSource === 'mock' ? 'fallback' : 'done',
        message: index === 1 && job.fetchSource === 'mock' ? '附近酒店价格抓取失败，已回退到 mock 数据' : step.message,
        source: step.source,
        startedAt: stepStartedAt(job.startedAt, index).toISOString(),
        completedAt: stepCompletedAt(job, index).toISOString(),
      } satisfies MonitoringJobStep;
    }

    if (index === stageIndex && !isCompleted) {
      return {
        key: step.key,
        status: 'running',
        message: step.message,
        source: step.source,
        startedAt: stepStartedAt(job.startedAt, index).toISOString(),
      } satisfies MonitoringJobStep;
    }

    return {
      key: step.key,
      status: isCompleted && step.key === 'waiting_user_confirmation' ? 'done' : 'pending',
      message: step.message,
      source: step.source,
    } satisfies MonitoringJobStep;
  });
}

function stepStartedAt(startedAt: Date, index: number): Date {
  if (index === 0) {
    return startedAt;
  }

  const duration = workflowDurations[index - 1] ?? workflowDurations[0];
  return new Date(startedAt.getTime() + duration);
}

function stepCompletedAt(job: StoredMonitoringJob, index: number): Date {
  if (job.completedAt && index === 4) {
    return job.completedAt;
  }

  const duration = workflowDurations[Math.min(index, workflowDurations.length - 1)] ?? workflowDurations[0];
  return new Date(job.startedAt.getTime() + duration);
}

function mapDecisionStatus(status: 'PENDING' | 'ACCEPTED' | 'REJECTED'): 'pending' | 'accepted' | 'rejected' {
  if (status === 'ACCEPTED') {
    return 'accepted';
  }

  if (status === 'REJECTED') {
    return 'rejected';
  }

  return 'pending';
}

function mapRecommendationSummary(recommendation: {
  id: string;
  currentPrice: number;
  suggestedPrice: number;
  unsoldRooms: number;
  reason: string;
  competitorData: unknown;
  decisionStatus: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: Date;
  decidedAt: Date | undefined;
}): RecommendationSummary {
  return {
    id: recommendation.id,
    currentPrice: recommendation.currentPrice,
    suggestedPrice: recommendation.suggestedPrice,
    unsoldRooms: recommendation.unsoldRooms,
    reason: recommendation.reason,
    decisionStatus: mapDecisionStatus(recommendation.decisionStatus),
    createdAt: recommendation.createdAt.toISOString(),
    decidedAt: recommendation.decidedAt?.toISOString(),
    competitors: recommendation.competitorData as CompetitorPrice[],
  };
}

function addDays(date: Date, days: number): Date {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function formatCompactDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}
