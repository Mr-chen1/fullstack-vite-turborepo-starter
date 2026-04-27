export type MonitoringJobStatus = 'queued' | 'running' | 'waiting_confirmation' | 'completed' | 'failed';

export type MonitoringJobStepKey =
  | 'check_inventory'
  | 'fetch_competitor_prices'
  | 'calculate_market_average'
  | 'generate_recommendation'
  | 'waiting_user_confirmation';

export type MonitoringJobStepStatus = 'pending' | 'running' | 'done' | 'failed' | 'fallback';

export type RecommendationDecision = 'accepted' | 'rejected';

export type RecommendationStatus = RecommendationDecision | 'pending' | 'idle';

export type CompetitorPrice = {
  hotelName: string;
  roomTypeName: string;
  channel: string;
  price: number;
  capturedAt: string;
  source: 'live' | 'mock';
}

export type RoomTypeSummary = {
  id: string;
  name: string;
  currentPrice: number;
  unsoldRooms: number;
  latestDecisionStatus: RecommendationStatus;
}

export type HotelSummary = {
  id: string;
  name: string;
  district: string;
  roomTypes: RoomTypeSummary[];
}

export type RecommendationSummary = {
  id: string;
  currentPrice: number;
  suggestedPrice: number;
  unsoldRooms: number;
  reason: string;
  decisionStatus: RecommendationDecision | 'pending';
  createdAt: string;
  decidedAt?: string;
  competitors: CompetitorPrice[];
}

export type RoomTypeDetail = {
  id: string;
  hotelId: string;
  hotelName: string;
  roomTypeName: string;
  currentPrice: number;
  unsoldRooms: number;
  latestRecommendation: RecommendationSummary | undefined;
}

export type MonitoringJobStep = {
  key: MonitoringJobStepKey;
  status: MonitoringJobStepStatus;
  message: string;
  source: 'live' | 'mock' | 'system';
  startedAt?: string;
  completedAt?: string;
}

export type MonitoringJob = {
  id: string;
  hotelId: string;
  roomTypeId: string;
  status: MonitoringJobStatus;
  currentStep: MonitoringJobStepKey;
  startedAt: string;
  completedAt?: string;
  recommendationId?: string;
  recommendation?: RecommendationSummary;
  steps: MonitoringJobStep[];
}
