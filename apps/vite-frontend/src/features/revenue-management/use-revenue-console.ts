import {useEffect, useState} from 'react';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  type HotelSummary,
  type MonitoringJobStep,
  type RecommendationDecision,
  type RecommendationSummary,
} from '@next-nest-turbo-auth-boilerplate/shared';
import {revenueKeys} from './query-keys';
import {
  createMonitoringJobApi,
  getMonitoringJobApi,
  getRecommendationHistoryApi,
  getRevenueHotelsApi,
  getRoomTypeDetailApi,
  submitRecommendationDecisionApi,
} from '@/api/revenue-management.api';

const idleWorkflowSteps: MonitoringJobStep[] = [
  {key: 'check_inventory', status: 'pending', message: '正在检查本店库存', source: 'system'},
  {key: 'fetch_competitor_prices', status: 'pending', message: '正在抓取附近酒店价格', source: 'system'},
  {key: 'calculate_market_average', status: 'pending', message: '正在计算竞品均价', source: 'system'},
  {key: 'generate_recommendation', status: 'pending', message: '正在生成调价建议', source: 'system'},
  {key: 'waiting_user_confirmation', status: 'pending', message: '等待用户确认', source: 'system'},
];

export function useRevenueConsole(): {
  hotels: HotelSummary[];
  selectedHotelId?: string;
  selectedRoomTypeId?: string;
  activeHotel?: HotelSummary;
  activeRoomType?: HotelSummary['roomTypes'][number];
  roomDetail?: Awaited<ReturnType<typeof getRoomTypeDetailApi>>;
  history: RecommendationSummary[];
  workflowSteps: MonitoringJobStep[];
  recommendationModal: RecommendationSummary | null;
  isBootstrapping: boolean;
  isMonitoring: boolean;
  selectRoomType: (hotelId: string, roomTypeId: string) => void;
  startMonitoring: () => Promise<void>;
  submitDecision: (decision: RecommendationDecision) => Promise<void>;
} {
  const queryClient = useQueryClient();
  const [selectedHotelId, setSelectedHotelId] = useState<string>();
  const [selectedRoomTypeId, setSelectedRoomTypeId] = useState<string>();
  const [activeJobId, setActiveJobId] = useState<string>();
  const [workflowSteps, setWorkflowSteps] = useState<MonitoringJobStep[]>(idleWorkflowSteps);
  const [recommendationModal, setRecommendationModal] = useState<RecommendationSummary | null>(null);

  const hotelsQuery = useQuery({
    queryKey: revenueKeys.hotels,
    queryFn: getRevenueHotelsApi,
  });

  const activeHotel = hotelsQuery.data?.find((hotel) => hotel.id === selectedHotelId);
  const activeRoomType = activeHotel?.roomTypes.find((roomType) => roomType.id === selectedRoomTypeId);

  useEffect(() => {
    if (!hotelsQuery.data?.length || (selectedHotelId && selectedRoomTypeId)) {
      return;
    }

    const firstHotel = hotelsQuery.data[0];
    const firstRoomType = firstHotel?.roomTypes[0];
    if (!firstHotel || !firstRoomType) {
      return;
    }

    setSelectedHotelId(firstHotel.id);
    setSelectedRoomTypeId(firstRoomType.id);
  }, [hotelsQuery.data, selectedHotelId, selectedRoomTypeId]);

  const roomDetailQuery = useQuery({
    queryKey:
      selectedHotelId && selectedRoomTypeId
        ? revenueKeys.roomDetail(selectedHotelId, selectedRoomTypeId)
        : [...revenueKeys.all, 'room-detail', 'idle'],
    queryFn: async () => getRoomTypeDetailApi(selectedHotelId!, selectedRoomTypeId!),
    enabled: Boolean(selectedHotelId && selectedRoomTypeId),
  });

  const historyQuery = useQuery({
    queryKey:
      selectedHotelId && selectedRoomTypeId
        ? revenueKeys.history(selectedHotelId, selectedRoomTypeId)
        : [...revenueKeys.all, 'history', 'idle'],
    queryFn: async () => getRecommendationHistoryApi(selectedHotelId!, selectedRoomTypeId!),
    enabled: Boolean(selectedHotelId && selectedRoomTypeId),
  });
  const roomDetail = roomDetailQuery.data;

  const activeJobQuery = useQuery({
    queryKey: activeJobId ? revenueKeys.job(activeJobId) : [...revenueKeys.all, 'job', 'idle'],
    queryFn: async () => getMonitoringJobApi(activeJobId!),
    enabled: Boolean(activeJobId),
    refetchInterval(query) {
      return query.state.data?.status === 'running' ? 1200 : false;
    },
  });

  useEffect(() => {
    if (!activeJobQuery.data) {
      return;
    }

    syncJobSnapshot(activeJobQuery.data);
  }, [activeJobQuery.data]);

  const createJobMutation = useMutation({
    mutationFn: createMonitoringJobApi,
  });

  const decisionMutation = useMutation({
    mutationFn: async ({recommendationId, decision}: {recommendationId: string; decision: RecommendationDecision}) =>
      submitRecommendationDecisionApi(recommendationId, decision),
    async onSuccess() {
      setRecommendationModal(null);
      setActiveJobId(undefined);
      setWorkflowSteps(
        workflowSteps.map((step) => ({
          ...step,
          status: step.key === 'waiting_user_confirmation' ? 'done' : step.status === 'running' ? 'done' : step.status,
        })),
      );

      await Promise.all([
        queryClient.invalidateQueries({queryKey: revenueKeys.hotels}),
        selectedHotelId && selectedRoomTypeId
          ? queryClient.invalidateQueries({queryKey: revenueKeys.roomDetail(selectedHotelId, selectedRoomTypeId)})
          : Promise.resolve(),
        selectedHotelId && selectedRoomTypeId
          ? queryClient.invalidateQueries({queryKey: revenueKeys.history(selectedHotelId, selectedRoomTypeId)})
          : Promise.resolve(),
      ]);
    },
  });

  return {
    hotels: hotelsQuery.data ?? [],
    selectedHotelId,
    selectedRoomTypeId,
    activeHotel,
    activeRoomType,
    roomDetail,
    history: historyQuery.data ?? [],
    workflowSteps,
    recommendationModal,
    isBootstrapping: hotelsQuery.isLoading || roomDetailQuery.isLoading || historyQuery.isLoading,
    isMonitoring: createJobMutation.isPending || activeJobQuery.data?.status === 'running' || decisionMutation.isPending,
    selectRoomType(hotelId: string, roomTypeId: string) {
      setSelectedHotelId(hotelId);
      setSelectedRoomTypeId(roomTypeId);
      setActiveJobId(undefined);
      setRecommendationModal(null);
      setWorkflowSteps(idleWorkflowSteps);
    },
    async startMonitoring() {
      if (!selectedHotelId || !selectedRoomTypeId) {
        return;
      }

      try {
        const job = await createJobMutation.mutateAsync({
          hotelId: selectedHotelId,
          roomTypeId: selectedRoomTypeId,
        });

        setActiveJobId(job.id);
        syncJobSnapshot({
          ...job,
          steps:
            job.steps.length > 0
              ? job.steps
              : idleWorkflowSteps.map((step, index) => ({
                ...step,
                status: index === 0 ? 'running' : 'pending',
              })),
        });

        const snapshot = await getMonitoringJobApi(job.id);
        syncJobSnapshot(snapshot);
      } catch {
        setWorkflowSteps([
          {key: 'check_inventory', status: 'done', message: '正在检查本店库存', source: 'system'},
          {key: 'fetch_competitor_prices', status: 'fallback', message: '附近酒店价格抓取失败，已回退到 mock 数据', source: 'mock'},
          {key: 'calculate_market_average', status: 'done', message: '正在计算竞品均价', source: 'system'},
          {key: 'generate_recommendation', status: 'done', message: '正在生成调价建议', source: 'system'},
          {key: 'waiting_user_confirmation', status: 'running', message: '等待用户确认', source: 'system'},
        ]);

        if (roomDetail) {
          setRecommendationModal({
            id: 'local-fallback-recommendation',
            currentPrice: roomDetail.currentPrice,
            suggestedPrice: Number(roomDetail.currentPrice) + 20,
            unsoldRooms: roomDetail.unsoldRooms,
            reason: '实时抓取未返回结果，已回退到本地 mock 建议用于演示。',
            decisionStatus: 'pending',
            createdAt: new Date().toISOString(),
            competitors: [],
          });
        }
      }
    },
    async submitDecision(decision: RecommendationDecision) {
      if (!recommendationModal) {
        return;
      }

      await decisionMutation.mutateAsync({
        recommendationId: recommendationModal.id,
        decision,
      });
    },
  };

  function syncJobSnapshot(job: {
    status: 'queued' | 'running' | 'waiting_confirmation' | 'completed' | 'failed';
    steps: MonitoringJobStep[];
    recommendation?: RecommendationSummary;
  }): void {
    setWorkflowSteps(job.steps.length > 0 ? job.steps : idleWorkflowSteps);

    if (job.status === 'waiting_confirmation' && job.recommendation) {
      setRecommendationModal(job.recommendation);
    }
  }
}
