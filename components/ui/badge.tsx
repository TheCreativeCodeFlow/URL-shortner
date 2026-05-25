import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[11px] font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-surface-secondary text-text-secondary",
        accent: "border-transparent bg-accent-primary text-white",
        success:
          "border-transparent bg-[color-mix(in_srgb,var(--success)_12%,transparent)] text-status-success",
        warning:
          "border-transparent bg-[color-mix(in_srgb,var(--warning)_14%,transparent)] text-status-warning",
        danger:
          "border-transparent bg-[color-mix(in_srgb,var(--danger)_12%,transparent)] text-status-danger"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
