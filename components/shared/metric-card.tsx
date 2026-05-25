import type { Metric } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const toneMap = {
  neutral: "default",
  success: "success",
  warning: "warning",
  danger: "danger"
} as const;

type MetricCardProps = Metric & {
  compact?: boolean;
};

export function MetricCard({ label, value, delta, tone, compact = false }: MetricCardProps) {
  return (
    <Card className={cn("overflow-hidden", compact && "rounded-ui")}>
      <CardHeader className={cn("pb-2", compact && "p-4 pb-2")}>
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-xs font-medium uppercase tracking-[0.08em] text-text-muted">{label}</CardTitle>
          <Badge variant={toneMap[tone]}>{delta}</Badge>
        </div>
      </CardHeader>
      <CardContent className={cn("pt-0", compact && "p-4 pt-0")}>
        <div className="font-display text-3xl font-semibold text-text-primary">{value}</div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-tertiary">
          <div className="h-full w-2/3 rounded-full bg-accent-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
