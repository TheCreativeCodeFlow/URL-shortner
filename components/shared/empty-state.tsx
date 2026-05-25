import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: string;
};

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-panel border border-dashed border-border bg-surface-primary p-8 text-center">
      <span className="mx-auto grid size-12 place-items-center rounded-ui border border-border bg-surface-secondary">
        <Icon className="size-5 text-accent-primary" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-secondary">{description}</p>
      {action && (
        <Button className="mt-5" variant="secondary">
          {action}
        </Button>
      )}
    </div>
  );
}
