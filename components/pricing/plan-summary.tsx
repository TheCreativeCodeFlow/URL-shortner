import { Check } from "lucide-react";
import type { PricingPlan } from "@/types";

export function PlanSummary({ plan }: { plan: PricingPlan }) {
  return (
    <div className="grid gap-3">
      {plan.features.map((feature) => (
        <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
          <Check className="size-4 text-status-success" />
          {feature}
        </div>
      ))}
    </div>
  );
}
