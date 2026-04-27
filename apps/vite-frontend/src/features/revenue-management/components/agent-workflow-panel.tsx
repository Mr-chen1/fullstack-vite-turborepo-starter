import {type MonitoringJobStep} from '@next-nest-turbo-auth-boilerplate/shared';

type Props = {
  readonly steps: MonitoringJobStep[];
};

const statusToneClassName: Record<MonitoringJobStep['status'], string> = {
  pending: 'bg-slate-200 text-slate-600',
  running: 'bg-cyan-100 text-cyan-700',
  done: 'bg-emerald-100 text-emerald-700',
  failed: 'bg-rose-100 text-rose-700',
  fallback: 'bg-amber-100 text-amber-700',
};

export function AgentWorkflowPanel({steps}: Props) {
  return (
    <aside className="rounded-[30px] bg-slate-950 p-6 text-white shadow-[0_30px_70px_rgba(2,8,23,0.28)]">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Workflow</p>
          <h3 className="mb-0 text-2xl font-semibold tracking-tight text-white">Agent 工作流</h3>
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
      </div>

      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={step.key} className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-white">{step.message}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">source: {step.source}</p>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${statusToneClassName[step.status]}`}>
                {step.status}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
