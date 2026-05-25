"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type SwitchProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
};

export function Switch({ defaultChecked = false, checked, onCheckedChange, label }: SwitchProps) {
  const [internal, setInternal] = useState(defaultChecked);
  const isChecked = checked ?? internal;

  function toggle() {
    const next = !isChecked;
    setInternal(next);
    onCheckedChange?.(next);
  }

  return (
    <button
      type="button"
      aria-pressed={isChecked}
      aria-label={label}
      onClick={toggle}
      className={cn(
        "relative h-6 w-11 rounded-full border transition-colors duration-200 ease-product focus-visible:premium-focus",
        isChecked ? "border-accent-primary bg-accent-primary" : "border-border bg-surface-tertiary"
      )}
    >
      <span
        className={cn(
          "absolute top-1 size-4 rounded-full bg-white shadow-small transition-transform duration-200 ease-product",
          isChecked ? "translate-x-5" : "translate-x-1"
        )}
      />
    </button>
  );
}
