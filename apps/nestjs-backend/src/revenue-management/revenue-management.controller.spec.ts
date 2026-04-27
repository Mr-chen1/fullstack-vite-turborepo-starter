import {
  CreateMonitoringJobDto,
  type MonitoringJob,
  RecommendationDecisionDto,
  type MonitoringJobStatus,
} from '@next-nest-turbo-auth-boilerplate/shared';
import {type MonitoringJobsService} from './monitoring-jobs.service';
import {RevenueManagementController} from './revenue-management.controller';
import {type RevenueCatalogService} from './revenue-catalog.service';

describe('revenue management shared contract exports', () => {
  it('exports the DTO classes and monitoring status literals', () => {
    const createDto = new CreateMonitoringJobDto();
    createDto.hotelId = 'hotel-gz-hp';
    createDto.roomTypeId = 'room-deluxe-king';

    const decisionDto = new RecommendationDecisionDto();
    decisionDto.decision = 'accepted';

    const status: MonitoringJobStatus = 'waiting_confirmation';

    expect(createDto).toEqual({
      hotelId: 'hotel-gz-hp',
      roomTypeId: 'room-deluxe-king',
    });
    expect(decisionDto.decision).toBe('accepted');
    expect(status).toBe('waiting_confirmation');
  });
});

describe('RevenueManagementController', () => {
  const catalog = {
    listHotels: jest.fn(async () => [{id: 'hotel-1', name: '广州黄埔智选酒店'}]),
    getRoomTypeDetail: jest.fn(async () => ({id: 'room-1', name: '高级大床房'})),
    listRecommendationHistory: jest.fn(async () => [{id: 'rec-1', decisionStatus: 'accepted'}]),
  } as unknown as RevenueCatalogService;

  const monitoringJobs = {
    createJob: jest.fn(async () => ({id: 'job-1', status: 'running'})),
    getJob: jest.fn(async () => ({id: 'job-1', status: 'waiting_confirmation'})),
    submitDecision: jest.fn(async () => ({id: 'rec-1', decisionStatus: 'accepted'})),
  } as unknown as MonitoringJobsService;

  const controller = new RevenueManagementController(catalog, monitoringJobs);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns hotel list payloads from the catalog service', async () => {
    await expect(controller.listHotels()).resolves.toEqual([{id: 'hotel-1', name: '广州黄埔智选酒店'}]);
    expect(catalog.listHotels).toHaveBeenCalledTimes(1);
  });

  it('loads room-type detail payloads from the catalog service', async () => {
    await expect(controller.getRoomTypeDetail('hotel-1', 'room-1')).resolves.toEqual({
      id: 'room-1',
      name: '高级大床房',
    });
    expect(catalog.getRoomTypeDetail).toHaveBeenCalledWith('hotel-1', 'room-1');
  });

  it('loads recommendation history payloads from the catalog service', async () => {
    await expect(controller.listRecommendationHistory('hotel-1', 'room-1')).resolves.toEqual([
      {id: 'rec-1', decisionStatus: 'accepted'},
    ]);
    expect(catalog.listRecommendationHistory).toHaveBeenCalledWith('hotel-1', 'room-1');
  });

  it('creates a monitoring job through the monitoring service', async () => {
    const payload: CreateMonitoringJobDto = {hotelId: 'hotel-1', roomTypeId: 'room-1'};

    await expect(controller.createMonitoringJob(payload)).resolves.toEqual({
      id: 'job-1',
      status: 'running',
    } as Partial<MonitoringJob>);
    expect(monitoringJobs.createJob).toHaveBeenCalledWith(payload);
  });

  it('loads one monitoring job snapshot through the monitoring service', async () => {
    await expect(controller.getMonitoringJob('job-1')).resolves.toEqual({
      id: 'job-1',
      status: 'waiting_confirmation',
    } as Partial<MonitoringJob>);
    expect(monitoringJobs.getJob).toHaveBeenCalledWith('job-1');
  });

  it('submits a recommendation decision through the monitoring service', async () => {
    const payload: RecommendationDecisionDto = {decision: 'accepted'};

    await expect(controller.submitRecommendationDecision('rec-1', payload)).resolves.toEqual({
      id: 'rec-1',
      decisionStatus: 'accepted',
    });
    expect(monitoringJobs.submitDecision).toHaveBeenCalledWith('rec-1', 'accepted');
  });
});
