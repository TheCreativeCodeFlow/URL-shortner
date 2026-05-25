"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { marketingNav } from "@/mock/data";
import { cn } from "@/lib/utils";

export function TopNavbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    function onScroll() {
      setSolid(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-200 ease-product",
        solid
          ? "border-border bg-canvas/95 shadow-small backdrop-blur-sm"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {marketingNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-ui px-3 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-surface-secondary hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle compact />
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/login">
              <LogIn data-icon="inline-start" />
              Login
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">
              Get Started
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
