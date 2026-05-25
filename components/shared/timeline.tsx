import { activity } from "@/mock/data";
import { cn } from "@/lib/utils";

type TimelineProps = {
  compact?: boolean;
};

export function Timeline({ compact = false }: TimelineProps) {
  return (
    <div className="flex flex-col">
      {activity.map((item, index) => (
        <div key={item.title} className="relative grid grid-cols-[20px_1fr] gap-3 pb-5 last:pb-0">
          {index !== activity.length - 1 && <span className="absolute left-[9px] top-5 h-full w-px bg-hairline" />}
          <span
            className={cn(
              "relative z-[1] mt-1 size-5 rounded-full border border-border bg-surface-primary",
              item.tone === "success" && "border-status-success",
              item.tone === "warning" && "border-status-warning",
              item.tone === "danger" && "border-status-danger"
            )}
          />
          <div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-text-primary">{item.title}</p>
              <span className="text-[11px] text-text-muted">{item.time}</span>
            </div>
            {!compact && <p className="mt-1 text-sm leading-6 text-text-secondary">{item.detail}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
