"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type TabsProps = {
  tabs: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export function Tabs({ tabs, defaultValue, onChange }: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0]);

  return (
    <div className="inline-flex rounded-ui border border-border bg-surface-secondary p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => {
            setActive(tab);
            onChange?.(tab);
          }}
          className={cn(
            "h-8 rounded-[9px] px-3 text-xs font-medium transition-all duration-200 ease-product",
            active === tab ? "bg-surface-primary text-text-primary shadow-small" : "text-text-muted hover:text-text-primary"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
