import {type AxiosRequestConfig} from 'axios';
import {
  type CreateMonitoringJobDto,
  type HotelSummary,
  type MonitoringJob,
  type RecommendationDecision,
  type RecommendationSummary,
  type RoomTypeDetail,
} from '@next-nest-turbo-auth-boilerplate/shared';
import {axiosInstance} from '@/lib/axios.ts';

type RequestConfigWithRevenueMeta = AxiosRequestConfig & {
  skipAuthRedirect?: boolean;
  skipAuthRefresh?: boolean;
};

const requestConfig: RequestConfigWithRevenueMeta = {
  skipAuthRedirect: true,
  skipAuthRefresh: true,
};

export async function getRevenueHotelsApi(): Promise<HotelSummary[]> {
  const {data} = await axiosInstance.get<HotelSummary[]>('/revenue/hotels', requestConfig);
  return data;
}

export async function getRoomTypeDetailApi(hotelId: string, roomTypeId: string): Promise<RoomTypeDetail> {
  const {data} = await axiosInstance.get<RoomTypeDetail>(
    `/revenue/hotels/${hotelId}/room-types/${roomTypeId}`,
    requestConfig,
  );
  return data;
}

export async function getRecommendationHistoryApi(
  hotelId: string,
  roomTypeId: string,
): Promise<RecommendationSummary[]> {
  const {data} = await axiosInstance.get<RecommendationSummary[]>(
    `/revenue/hotels/${hotelId}/room-types/${roomTypeId}/recommendations`,
    requestConfig,
  );
  return data;
}

export async function createMonitoringJobApi(payload: CreateMonitoringJobDto): Promise<MonitoringJob> {
  const {data} = await axiosInstance.post<MonitoringJob>('/revenue/monitoring-jobs', payload, requestConfig);
  return data;
}

export async function getMonitoringJobApi(jobId: string): Promise<MonitoringJob> {
  const {data} = await axiosInstance.get<MonitoringJob>(`/revenue/monitoring-jobs/${jobId}`, requestConfig);
  return data;
}

export async function submitRecommendationDecisionApi(
  recommendationId: string,
  decision: RecommendationDecision,
): Promise<RecommendationSummary> {
  const {data} = await axiosInstance.post<RecommendationSummary>(
    `/revenue/recommendations/${recommendationId}/decision`,
    {decision},
    requestConfig,
  );
  return data;
}
