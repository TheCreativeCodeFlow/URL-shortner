import { ShieldCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function SecurityScore() {
  return (
    <div className="rounded-panel border border-border bg-surface-primary p-6 shadow-large">
      <div className="flex items-center justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted">Security Score</p>
          <h2 className="mt-2 font-display text-5xl font-semibold text-text-primary">94</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
            Workspace policies are strong. Review expiring temporary links and geography anomalies to return to optimal posture.
          </p>
        </div>
        <div className="grid size-20 place-items-center rounded-editorial border border-border bg-surface-secondary">
          <ShieldCheck className="size-9 text-status-success" />
        </div>
      </div>
      <Progress value={94} className="mt-6" />
    </div>
  );
}
