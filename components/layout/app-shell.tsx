"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronLeft, Command, Menu, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CommandPanel } from "@/components/shared/command-panel";
import { Drawer } from "@/components/shared/drawer";
import { Logo } from "@/components/shared/logo";
import { Modal } from "@/components/shared/modal";
import { NotificationCenter } from "@/components/shared/notification-center";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { appNav } from "@/mock/data";
import { cn } from "@/lib/utils";
import { useCommandPalette } from "@/hooks/use-command-palette";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [quickCreate, setQuickCreate] = useState(false);
  const command = useCommandPalette();
  const current = appNav.find((item) => pathname.startsWith(item.href));

  return (
    <div className="min-h-screen bg-canvas">
      <aside
        className={cn(
          "fixed left-0 top-0 z-30 hidden h-screen border-r border-border bg-surface-primary transition-all duration-200 ease-product lg:block",
          collapsed ? "w-[76px]" : "w-72"
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <div className={cn(collapsed && "scale-90")}>
            <Logo />
          </div>
          <Button variant="ghost" size="icon" onClick={() => setCollapsed((value) => !value)} className="size-8">
            <ChevronLeft className={cn("size-4 transition-transform", collapsed && "rotate-180")} />
          </Button>
        </div>
        <Separator />
        <div className="p-3">
          <button
            type="button"
            onClick={() => command.setOpen(true)}
            className={cn(
              "flex h-10 w-full items-center gap-3 rounded-ui border border-border bg-surface-secondary px-3 text-left text-sm text-text-muted transition-colors hover:text-text-primary",
              collapsed && "justify-center px-0"
            )}
          >
            <Command className="size-4" />
            {!collapsed && <span>Command palette</span>}
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {appNav.map((item) => {
            const active = pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                key={item.href}
                className={cn(
                  "flex h-10 items-center gap-3 rounded-ui px-3 text-sm font-medium transition-colors duration-200",
                  active
                    ? "bg-surface-secondary text-text-primary"
                    : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary",
                  collapsed && "justify-center px-0"
                )}
              >
                <Icon className="size-4" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
        {!collapsed && (
          <div className="absolute bottom-0 left-0 right-0 border-t border-hairline p-4">
            <div className="rounded-panel border border-border bg-surface-secondary p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted">Workspace health</p>
              <p className="mt-2 font-display text-2xl font-semibold text-text-primary">94%</p>
              <p className="mt-1 text-xs leading-5 text-text-secondary">Security and expiry policies are aligned.</p>
            </div>
          </div>
        )}
      </aside>

      <div className={cn("transition-all duration-200 ease-product lg:pl-72", collapsed && "lg:pl-[76px]")}>
        <header className="sticky top-0 z-20 border-b border-border bg-canvas/95 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu />
              </Button>
              <div className="min-w-0">
                <div className="text-xs text-text-muted">Universal Link Platform / {current?.label ?? "Console"}</div>
                <h1 className="truncate font-display text-lg font-semibold text-text-primary">{current?.label ?? "Console"}</h1>
              </div>
            </div>
            <div className="hidden flex-1 justify-center md:flex">
              <button
                type="button"
                onClick={() => command.setOpen(true)}
                className="flex h-10 w-full max-w-xl items-center gap-3 rounded-ui border border-border bg-surface-primary px-3 text-sm text-text-muted shadow-small"
              >
                <Search className="size-4" />
                Search links, policies, QR assets
                <span className="ml-auto rounded border border-border px-1.5 py-0.5 text-[10px]">Ctrl K</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle compact />
              <Button variant="secondary" size="icon" onClick={() => setNotifications(true)}>
                <Bell />
              </Button>
              <Button size="sm" onClick={() => setQuickCreate(true)}>
                <Plus data-icon="inline-start" />
                New
              </Button>
            </div>
          </div>
        </header>
        <main className="px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>

      {command.open && (
        <Modal title="Command Palette" onClose={() => command.setOpen(false)}>
          <CommandPanel />
        </Modal>
      )}

      {notifications && (
        <Drawer title="Notification Center" onClose={() => setNotifications(false)}>
          <NotificationCenter />
        </Drawer>
      )}

      {quickCreate && (
        <Modal title="Global Quick Create" onClose={() => setQuickCreate(false)}>
          <div className="grid gap-3">
            <Input placeholder="Destination URL" />
            <Input placeholder="Alias" />
            <Button>Create mock link</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
