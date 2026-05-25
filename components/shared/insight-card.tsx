import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type InsightCardProps = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export function InsightCard({ title, detail, icon: Icon }: InsightCardProps) {
  return (
    <Card className="group transition-transform duration-200 ease-product hover:-translate-y-0.5">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-ui border border-border bg-surface-secondary">
            <Icon className="size-4 text-accent-primary" />
          </span>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-text-secondary">{detail}</p>
      </CardContent>
    </Card>
  );
}
