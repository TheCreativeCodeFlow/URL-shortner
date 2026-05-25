import { chartSeries } from "@/mock/data";
import { cn } from "@/lib/utils";

type MiniChartProps = {
  values?: number[];
  className?: string;
};

export function MiniChart({ values = chartSeries, className }: MiniChartProps) {
  const max = Math.max(...values);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 100 - (value / max) * 82 - 8;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className={cn("relative h-40 overflow-hidden rounded-panel border border-border bg-surface-primary", className)}>
      <div className="absolute inset-0 surface-grid opacity-50" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
        <polyline
          points={points}
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <polyline
          points={`0,100 ${points} 100,100`}
          fill="color-mix(in srgb, var(--accent-primary) 12%, transparent)"
          stroke="none"
        />
      </svg>
    </div>
  );
}
