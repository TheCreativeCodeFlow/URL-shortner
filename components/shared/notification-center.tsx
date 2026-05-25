import { activity } from "@/mock/data";

export function NotificationCenter() {
  return (
    <div className="grid gap-3">
      {activity.map((item) => (
        <div key={item.title} className="rounded-ui border border-border bg-surface-secondary p-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-text-primary">{item.title}</p>
            <span className="text-[11px] text-text-muted">{item.time}</span>
          </div>
          <p className="mt-1 text-sm text-text-secondary">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
