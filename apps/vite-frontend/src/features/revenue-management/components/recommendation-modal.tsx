import {type RecommendationSummary} from '@next-nest-turbo-auth-boilerplate/shared';
import {Button} from '@/components/ui/button.tsx';

type Props = {
  readonly isOpen: boolean;
  readonly recommendation: RecommendationSummary | null;
  readonly onAccept: () => Promise<void>;
  readonly onReject: () => Promise<void>;
};

export function RecommendationModal({isOpen, recommendation, onAccept, onReject}: Props) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="调价建议"
        className="w-full max-w-3xl rounded-[32px] bg-white p-0 shadow-[0_36px_100px_rgba(15,23,42,0.24)]"
      >
        <div className="rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.14),transparent_34%),radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_38%),white] p-7">
          <div>
            <h3 className="mb-2 text-3xl font-semibold tracking-tight text-slate-950">调价建议</h3>
            <p className="text-sm leading-6 text-slate-500">
              Agent 已完成库存、竞品与均价分析，请确认是否采纳本次建议。
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <ModalMetric label="当前售价" value={recommendation ? `¥${recommendation.currentPrice}` : '--'} />
            <ModalMetric label="建议售价" value={recommendation ? `¥${recommendation.suggestedPrice}` : '--'} />
            <ModalMetric label="剩余未售" value={recommendation ? `${recommendation.unsoldRooms} 间` : '--'} />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
              <h4 className="mb-3 text-lg font-semibold text-slate-900">Agent 分析原因</h4>
              <p className="text-sm leading-7 text-slate-600">{recommendation?.reason ?? '暂无分析结论'}</p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5">
              <h4 className="mb-3 text-lg font-semibold text-slate-900">附近竞品酒店价格</h4>
              <div className="space-y-3">
                {recommendation?.competitors.map((competitor) => (
                  <div
                    key={`${competitor.hotelName}-${competitor.price}`}
                    className="rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <p className="font-medium text-slate-900">{competitor.hotelName}</p>
                    <p className="text-sm text-slate-500">{competitor.roomTypeName}</p>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-cyan-700">{competitor.channel}</span>
                      <span className="font-semibold text-slate-900">¥{competitor.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-7 flex flex-wrap justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              className="rounded-full px-6"
              onClick={() => {
                void onReject();
              }}
            >
              否，暂不调整
            </Button>
            <Button
              type="button"
              className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800"
              onClick={() => {
                void onAccept();
              }}
            >
              是，采纳建议
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalMetric({label, value}: {readonly label: string; readonly value: string}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/90 p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
    </div>
  );
}
