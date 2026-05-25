import { BarChart3, LockKeyhole, Route, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MiniChart } from "@/components/charts/mini-chart";
import { QrPreview } from "@/components/shared/qr-preview";
import { Timeline } from "@/components/shared/timeline";

export function ProductPreview() {
  return (
    <div className="relative min-h-[560px]">
      <div className="absolute right-0 top-4 w-[86%] rounded-editorial border border-border bg-surface-primary p-5 shadow-large">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-text-muted">Live operating plane</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-text-primary">ulp.run/launch</h3>
          </div>
          <Badge variant="success">Live</Badge>
        </div>
        <MiniChart className="mt-5 h-44" />
        <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
          {[
            ["Clicks", "128K"],
            ["Risk", "Low"],
            ["Regions", "42"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-ui border border-border bg-surface-secondary p-3">
              <p className="text-[11px] uppercase tracking-[0.08em] text-text-muted">{label}</p>
              <p className="mt-1 font-display text-lg font-semibold text-text-primary">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-28 w-[54%] rounded-editorial border border-border bg-surface-primary p-5 shadow-large">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-ui bg-surface-secondary">
            <ShieldCheck className="size-4 text-status-success" />
          </span>
          <div>
            <h3 className="font-display text-base font-semibold text-text-primary">Security posture</h3>
            <p className="text-sm text-text-secondary">94 score</p>
          </div>
        </div>
        <div className="mt-5 grid gap-2">
          {["Password enforced", "Expiry aligned", "Audit active"].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-ui border border-border bg-surface-secondary px-3 py-2 text-sm">
              <span className="text-text-secondary">{item}</span>
              <span className="text-status-success">Active</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-10 w-[60%] rounded-editorial border border-border bg-surface-primary p-5 shadow-large">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <QrPreview />
            <div>
              <h3 className="font-display text-base font-semibold text-text-primary">Workspace stack</h3>
              <p className="mt-1 text-sm leading-6 text-text-secondary">Marketing, projects, resume, and temporary surfaces share one policy layer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-8 hidden w-72 rounded-editorial border border-border bg-surface-primary p-5 shadow-large xl:block">
        <Timeline compact />
      </div>

      <div className="absolute right-2 top-[260px] hidden grid-cols-3 gap-2 rounded-editorial border border-border bg-surface-primary p-3 shadow-large sm:grid">
        {[Route, BarChart3, LockKeyhole].map((Icon, index) => (
          <span key={index} className="grid size-10 place-items-center rounded-ui bg-surface-secondary">
            <Icon className="size-4 text-accent-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
