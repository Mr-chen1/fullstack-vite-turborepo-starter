import {NotFoundException} from '@nestjs/common';
import {type PrismaService} from '@next-nest-turbo-auth-boilerplate/db';
import {type CompetitorPrice} from '@next-nest-turbo-auth-boilerplate/shared';
import {MonitoringJobsService} from './monitoring-jobs.service';
import {type OtaMockAdapter} from './ota-mock.adapter';
import {type OtaScriptAdapter} from './ota-script.adapter';
import {type RecommendationEngineService} from './recommendation-engine.service';

describe('MonitoringJobsService', () => {
  const roomTypeRecord = {
    id: 'room-1',
    hotelId: 'hotel-1',
    name: '高级大床房',
    currentPrice: 398,
    unsoldRooms: 8,
    hotel: {
      id: 'hotel-1',
      name: '广州黄埔智选酒店',
      district: '黄埔区',
    },
  };

  const persistedRecommendation = {
    id: 'rec-1',
    hotelId: 'hotel-1',
    roomTypeId: 'room-1',
    currentPrice: 398,
    suggestedPrice: 418,
    unsoldRooms: 8,
    reason: '竞品均价高于当前售价，建议上调。',
    competitorData: [
      {
        hotelName: '广州科学城美居酒店',
        roomTypeName: '高级双床房',
        channel: 'elong',
        price: 428,
        capturedAt: '2026-04-27T12:00:00.000Z',
        source: 'mock',
      },
    ],
    decisionStatus: 'PENDING',
    createdAt: new Date('2026-04-27T06:40:00.000Z'),
    decidedAt: null,
  };

  const prisma = {
    roomType: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    pricingRecommendation: {
      create: jest.fn(),
      update: jest.fn(),
    },
  } as unknown as PrismaService;

  const scriptAdapter = {
    fetchCompetitorPrices: jest.fn(),
  } as unknown as OtaScriptAdapter;

  const mockAdapter = {
    getCompetitorPrices: jest.fn(),
  } as unknown as OtaMockAdapter;

  const recommendationEngine = {
    generate: jest.fn(),
  } as unknown as RecommendationEngineService;

  const service = new MonitoringJobsService(prisma, scriptAdapter, mockAdapter, recommendationEngine);

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('creates a job, falls back to mock competitors, and exposes a waiting-confirmation snapshot after the workflow delay', async () => {
    jest.spyOn(Date, 'now').mockReturnValue(new Date('2026-04-27T06:40:00.000Z').getTime());
    jest.mocked(prisma.roomType.findUnique).mockResolvedValue(roomTypeRecord as never);
    jest.mocked(scriptAdapter.fetchCompetitorPrices).mockRejectedValue(new Error('script unavailable'));

    const competitors: CompetitorPrice[] = [
      {
        hotelName: '广州科学城美居酒店',
        roomTypeName: '高级双床房',
        channel: 'elong',
        price: 428,
        capturedAt: '2026-04-27T12:00:00.000Z',
        source: 'mock',
      },
    ];

    jest.mocked(mockAdapter.getCompetitorPrices).mockResolvedValue(competitors);
    jest.mocked(recommendationEngine.generate).mockReturnValue({
      currentPrice: 398,
      suggestedPrice: 418,
      unsoldRooms: 8,
      reason: '竞品均价高于当前售价，建议上调。',
      competitors,
    });
    jest.mocked(prisma.pricingRecommendation.create).mockResolvedValue(persistedRecommendation as never);

    const createdJob = await service.createJob({
      hotelId: 'hotel-1',
      roomTypeId: 'room-1',
    });

    expect(createdJob.status).toBe('running');
    expect(createdJob.currentStep).toBe('check_inventory');

    jest.spyOn(Date, 'now').mockReturnValue(new Date('2026-04-27T06:40:05.000Z').getTime());

    const loadedJob = await service.getJob(createdJob.id);

    expect(loadedJob.status).toBe('waiting_confirmation');
    expect(loadedJob.recommendation).toMatchObject({
      id: 'rec-1',
      suggestedPrice: 418,
      decisionStatus: 'pending',
    });
    expect(loadedJob.steps.find(step => step.key === 'fetch_competitor_prices')).toMatchObject({
      status: 'fallback',
      source: 'mock',
    });
  });

  it('marks the recommendation accepted and updates the room price when the user adopts the suggestion', async () => {
    jest.spyOn(Date, 'now').mockReturnValue(new Date('2026-04-27T06:40:00.000Z').getTime());
    jest.mocked(prisma.roomType.findUnique).mockResolvedValue(roomTypeRecord as never);
    jest.mocked(scriptAdapter.fetchCompetitorPrices).mockRejectedValue(new Error('script unavailable'));

    const competitors: CompetitorPrice[] = [
      {
        hotelName: '广州科学城美居酒店',
        roomTypeName: '高级双床房',
        channel: 'elong',
        price: 428,
        capturedAt: '2026-04-27T12:00:00.000Z',
        source: 'mock',
      },
    ];

    jest.mocked(mockAdapter.getCompetitorPrices).mockResolvedValue(competitors);
    jest.mocked(recommendationEngine.generate).mockReturnValue({
      currentPrice: 398,
      suggestedPrice: 418,
      unsoldRooms: 8,
      reason: '竞品均价高于当前售价，建议上调。',
      competitors,
    });
    jest.mocked(prisma.pricingRecommendation.create).mockResolvedValue(persistedRecommendation as never);
    jest.mocked(prisma.pricingRecommendation.update).mockResolvedValue({
      ...persistedRecommendation,
      decisionStatus: 'ACCEPTED',
      decidedAt: new Date('2026-04-27T06:45:00.000Z'),
    } as never);
    jest.mocked(prisma.roomType.update).mockResolvedValue({} as never);

    const createdJob = await service.createJob({
      hotelId: 'hotel-1',
      roomTypeId: 'room-1',
    });

    const {recommendationId} = createdJob;
    expect(recommendationId).toBeDefined();

    const updatedRecommendation = await service.submitDecision(recommendationId ?? 'missing', 'accepted');

    expect(updatedRecommendation.decisionStatus).toBe('accepted');
    expect(prisma.roomType.update).toHaveBeenCalledWith({
      where: {id: 'room-1'},
      data: {currentPrice: 418},
    });
  });

  it('throws when the job does not exist', async () => {
    await expect(service.getJob('missing-job')).rejects.toBeInstanceOf(NotFoundException);
  });
});
