import {type HotelSummary, type RoomTypeDetail} from '@next-nest-turbo-auth-boilerplate/shared';
import {Button} from '@/components/ui/button.tsx';

type Props = {
  readonly roomDetail?: RoomTypeDetail;
  readonly roomSummary?: HotelSummary['roomTypes'][number];
  readonly isMonitoring: boolean;
  readonly onStartMonitoring: () => Promise<void>;
};

const statusCopy: Record<string, string> = {
  idle: '待监测',
  pending: '待确认',
  accepted: '已采纳',
  rejected: '已拒绝',
};

export function MonitoringDetailPanel({roomDetail, roomSummary, isMonitoring, onStartMonitoring}: Props) {
  const latestStatus =
    roomDetail?.latestRecommendation?.decisionStatus ?? roomSummary?.latestDecisionStatus ?? 'idle';
  const ready = Boolean(roomDetail);

  return (
    <section className="rounded-[32px] border border-slate-200 bg-[linear-gradient(140deg,rgba(8,145,178,0.10),rgba(251,191,36,0.12),rgba(255,255,255,0.95))] p-6 shadow-[0_28px_60px_rgba(15,23,42,0.12)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">Agent Console</p>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight text-slate-950">
            {roomDetail ? `${roomDetail.hotelName} / ${roomDetail.roomTypeName}` : '请选择酒店房型'}
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            右侧 Agent 会模拟库存检查、竞品抓取、均价计算与调价建议生成流程，适合录制收益管理演示视频。
          </p>
        </div>

        <div className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          当前状态：{statusCopy[latestStatus]}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <MetricCard label="当前售价" value={roomDetail ? `¥${roomDetail.currentPrice}` : '--'} tone="cyan" />
        <MetricCard label="剩余未售" value={roomDetail ? `${roomDetail.unsoldRooms} 间` : '--'} tone="amber" />
        <MetricCard
          label="最近建议"
          value={roomDetail?.latestRecommendation ? `¥${roomDetail.latestRecommendation.suggestedPrice}` : '暂无'}
          tone="emerald"
        />
      </div>

      {ready ? (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            type="button"
            size="lg"
            disabled={isMonitoring}
            className="rounded-full bg-slate-950 px-8 text-white hover:bg-slate-800"
            onClick={() => {
              void onStartMonitoring();
            }}
          >
            {isMonitoring ? '监测中...' : '开始监测'}
          </Button>
          <span className="text-sm text-slate-500">
            本轮建议将优先尝试真实 OTA 脚本，失败时自动回退 mock 数据。
          </span>
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-slate-200 bg-white/70 px-4 py-4 text-sm text-slate-500">
          正在加载房型详情...
        </div>
      )}
    </section>
  );
}

function MetricCard({label, value, tone}: {readonly label: string; readonly value: string; readonly tone: 'cyan' | 'amber' | 'emerald'}) {
  const toneClassName =
    tone === 'cyan'
      ? 'from-cyan-500/15 to-cyan-100/80'
      : tone === 'amber'
        ? 'from-amber-400/20 to-amber-100/80'
        : 'from-emerald-400/20 to-emerald-100/80';

  return (
    <div className={`rounded-3xl border border-white/60 bg-gradient-to-br ${toneClassName} p-5`}>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
    </div>
  );
}
