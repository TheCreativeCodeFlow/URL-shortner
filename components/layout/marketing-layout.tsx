import type { ReactNode } from "react";
import { TopNavbar } from "@/components/layout/top-navbar";

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <TopNavbar />
      {children}
    </div>
  );
}
