import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {
  CreateMonitoringJobDto,
  RecommendationDecisionDto,
  type HotelSummary,
  type MonitoringJob,
  type RecommendationSummary,
  type RoomTypeDetail,
} from '@next-nest-turbo-auth-boilerplate/shared';
import {MonitoringJobsService} from './monitoring-jobs.service';
import {RevenueCatalogService} from './revenue-catalog.service';

@ApiTags('revenue-management')
@Controller('revenue')
export class RevenueManagementController {
  constructor(
    private readonly catalogService: RevenueCatalogService,
    private readonly monitoringJobsService: MonitoringJobsService,
  ) {}

  @Get('hotels')
  @ApiOperation({summary: 'List revenue-management hotels and room-type summaries'})
  async listHotels(): Promise<HotelSummary[]> {
    return this.catalogService.listHotels();
  }

  @Get('hotels/:hotelId/room-types/:roomTypeId')
  @ApiOperation({summary: 'Load revenue-management room-type detail'})
  async getRoomTypeDetail(
    @Param('hotelId') hotelId: string,
    @Param('roomTypeId') roomTypeId: string,
  ): Promise<RoomTypeDetail> {
    return this.catalogService.getRoomTypeDetail(hotelId, roomTypeId);
  }

  @Get('hotels/:hotelId/room-types/:roomTypeId/recommendations')
  @ApiOperation({summary: 'List revenue-management recommendation history'})
  async listRecommendationHistory(
    @Param('hotelId') hotelId: string,
    @Param('roomTypeId') roomTypeId: string,
  ): Promise<RecommendationSummary[]> {
    return this.catalogService.listRecommendationHistory(hotelId, roomTypeId);
  }

  @Post('monitoring-jobs')
  @ApiOperation({summary: 'Create a revenue monitoring job'} )
  async createMonitoringJob(@Body() payload: CreateMonitoringJobDto): Promise<MonitoringJob> {
    return this.monitoringJobsService.createJob(payload);
  }

  @Get('monitoring-jobs/:jobId')
  @ApiOperation({summary: 'Load one revenue monitoring job'} )
  async getMonitoringJob(@Param('jobId') jobId: string): Promise<MonitoringJob> {
    return this.monitoringJobsService.getJob(jobId);
  }

  @Post('recommendations/:recommendationId/decision')
  @ApiOperation({summary: 'Accept or reject a recommendation'} )
  async submitRecommendationDecision(
    @Param('recommendationId') recommendationId: string,
    @Body() payload: RecommendationDecisionDto,
  ): Promise<RecommendationSummary> {
    return this.monitoringJobsService.submitDecision(recommendationId, payload.decision);
  }
}
