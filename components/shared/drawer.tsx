"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type DrawerProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function Drawer({ title, children, onClose }: DrawerProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/20" role="dialog" aria-modal="true">
      <aside className="ml-auto h-full w-full max-w-md border-l border-border bg-surface-primary p-5 shadow-large">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="font-display text-lg font-semibold text-text-primary">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X />
          </Button>
        </div>
        {children}
      </aside>
    </div>
  );
}
