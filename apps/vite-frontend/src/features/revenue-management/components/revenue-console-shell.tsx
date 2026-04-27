import {useRevenueConsole} from '../use-revenue-console';
import {AgentWorkflowPanel} from './agent-workflow-panel.tsx';
import {HotelListPanel} from './hotel-list-panel.tsx';
import {MonitoringDetailPanel} from './monitoring-detail-panel.tsx';
import {RecommendationHistoryTable} from './recommendation-history-table.tsx';
import {RecommendationModal} from './recommendation-modal.tsx';

export function RevenueConsoleShell() {
  const {
    hotels,
    selectedHotelId,
    selectedRoomTypeId,
    activeRoomType,
    roomDetail,
    history,
    workflowSteps,
    recommendationModal,
    isMonitoring,
    selectRoomType,
    startMonitoring,
    submitDecision,
  } = useRevenueConsole();

  return (
    <>
      <div className="rounded-[36px] bg-[linear-gradient(145deg,#f7fafc_0%,#eefbf6_42%,#fff8eb_100%)] p-4 md:p-6">
        <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)_360px]">
          <HotelListPanel
            hotels={hotels}
            selectedHotelId={selectedHotelId}
            selectedRoomTypeId={selectedRoomTypeId}
            onSelect={selectRoomType}
          />

          <div className="space-y-6">
            <MonitoringDetailPanel
              roomDetail={roomDetail}
              roomSummary={activeRoomType}
              isMonitoring={isMonitoring}
              onStartMonitoring={startMonitoring}
            />
            <RecommendationHistoryTable rows={history} />
          </div>

          <AgentWorkflowPanel steps={workflowSteps} />
        </div>
      </div>

      <RecommendationModal
        isOpen={Boolean(recommendationModal)}
        recommendation={recommendationModal}
        onAccept={async () => submitDecision('accepted')}
        onReject={async () => submitDecision('rejected')}
      />
    </>
  );
}
