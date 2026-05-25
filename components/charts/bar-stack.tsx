import { cn } from "@/lib/utils";

type BarStackProps = {
  rows: Array<[string, string, string]>;
  className?: string;
};

export function BarStack({ rows, className }: BarStackProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {rows.map(([label, share, value]) => (
        <div key={label} className="grid grid-cols-[100px_1fr_56px] items-center gap-3 text-sm">
          <span className="truncate text-text-secondary">{label}</span>
          <div className="h-2 overflow-hidden rounded-full bg-surface-tertiary">
            <div className="h-full rounded-full bg-accent-primary" style={{ width: share }} />
          </div>
          <span className="text-right text-xs text-text-muted">{value}</span>
        </div>
      ))}
    </div>
  );
}
