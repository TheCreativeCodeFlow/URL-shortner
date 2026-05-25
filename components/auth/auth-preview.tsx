import { BarChart3, ShieldCheck } from "lucide-react";
import { MiniChart } from "@/components/charts/mini-chart";
import { Badge } from "@/components/ui/badge";

export function AuthPreview() {
  return (
    <div className="relative hidden min-h-[620px] overflow-hidden border-l border-border bg-surface-primary p-10 lg:block">
      <div className="absolute inset-0 surface-grid opacity-40" />
      <div className="relative">
        <Badge>Infrastructure preview</Badge>
        <h2 className="mt-5 max-w-md font-display text-5xl font-semibold leading-tight text-text-primary">
          Govern every route before it reaches the world.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-6 text-text-secondary">
          A premium console for analytics, workspace segmentation, QR management, and link security policy.
        </p>
      </div>
      <div className="relative mt-10 grid gap-4">
        <div className="rounded-editorial border border-border bg-canvas p-5 shadow-large">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-status-success" />
            <span className="font-medium text-text-primary">Security preview</span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {["94", "3.7K", "27"].map((value, index) => (
              <div key={value} className="rounded-ui bg-surface-primary p-3">
                <p className="text-[11px] text-text-muted">{["Score", "Protected", "Events"][index]}</p>
                <p className="mt-1 font-display text-2xl font-semibold text-text-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-editorial border border-border bg-canvas p-5 shadow-large">
          <div className="mb-4 flex items-center gap-3">
            <BarChart3 className="size-5 text-accent-primary" />
            <span className="font-medium text-text-primary">Analytics preview</span>
          </div>
          <MiniChart className="h-36" />
        </div>
      </div>
    </div>
  );
}
