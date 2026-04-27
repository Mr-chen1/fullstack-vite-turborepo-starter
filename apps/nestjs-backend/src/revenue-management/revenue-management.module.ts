import {Module} from '@nestjs/common';
import {MonitoringJobsService} from './monitoring-jobs.service';
import {OtaMockAdapter} from './ota-mock.adapter';
import {OtaScriptAdapter} from './ota-script.adapter';
import {RecommendationEngineService} from './recommendation-engine.service';
import {RevenueCatalogService} from './revenue-catalog.service';
import {RevenueManagementController} from './revenue-management.controller';

@Module({
  controllers: [RevenueManagementController],
  providers: [
    RevenueCatalogService,
    MonitoringJobsService,
    RecommendationEngineService,
    OtaScriptAdapter,
    OtaMockAdapter,
  ],
  exports: [RevenueCatalogService, MonitoringJobsService],
})
export class RevenueManagementModule {}
