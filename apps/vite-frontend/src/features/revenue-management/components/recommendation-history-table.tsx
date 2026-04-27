import {type RecommendationSummary} from '@next-nest-turbo-auth-boilerplate/shared';

type Props = {
  readonly rows: RecommendationSummary[];
};

const statusCopy: Record<RecommendationSummary['decisionStatus'], string> = {
  pending: '待确认',
  accepted: '已采纳',
  rejected: '已拒绝',
};

export function RecommendationHistoryTable({rows}: Props) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">History</p>
          <h3 className="mb-0 text-xl font-semibold tracking-tight text-slate-900">建议历史</h3>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-5 py-8 text-center text-sm text-slate-500">
          暂无历史建议，发起一次监测后会在这里沉淀记录。
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 font-medium">时间</th>
                <th className="pb-3 font-medium">当前售价</th>
                <th className="pb-3 font-medium">建议售价</th>
                <th className="pb-3 font-medium">状态</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 last:border-b-0">
                  <td className="py-4 text-slate-600">{formatDateTime(row.createdAt)}</td>
                  <td className="py-4 font-medium text-slate-900">¥{row.currentPrice}</td>
                  <td className="py-4 font-medium text-slate-900">¥{row.suggestedPrice}</td>
                  <td className="py-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {statusCopy[row.decisionStatus]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function formatDateTime(value: string): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}
