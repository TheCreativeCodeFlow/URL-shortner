import { BellRing, CalendarClock, QrCode, ShieldAlert } from "lucide-react";
import { BarStack } from "@/components/charts/bar-stack";
import { MiniChart } from "@/components/charts/mini-chart";
import { QuickCreatePanel } from "@/components/dashboard/quick-create-panel";
import { MetricCard } from "@/components/shared/metric-card";
import { PageHeader } from "@/components/shared/page-header";
import { QrPreview } from "@/components/shared/qr-preview";
import { Timeline } from "@/components/shared/timeline";
import { WorkspaceCard } from "@/components/workspace/workspace-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { browserRows, deviceRows, links, metrics, workspaces } from "@/mock/data";

export default function DashboardPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <PageHeader
        eyebrow="Command center"
        title="Link operations dashboard"
        description="A dense operating view for recent links, workspace shortcuts, analytics, security posture, QR activity, and notification flow."
        actions={<Button>New Link</Button>}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="grid gap-6">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <div>
                <CardTitle>Recent links grid</CardTitle>
                <p className="mt-1 text-sm text-text-secondary">High-traffic and policy-sensitive links.</p>
              </div>
              <Badge>Live</Badge>
            </CardHeader>
            <CardContent className="grid gap-3">
              {links.slice(0, 4).map((link) => (
                <div key={link.id} className="grid gap-3 rounded-ui border border-border bg-surface-secondary p-4 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-text-primary">{link.shortUrl}</p>
                    <p className="mt-1 truncate text-sm text-text-secondary">{link.destination}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>{link.workspace}</Badge>
                    <span className="text-sm font-semibold text-text-primary">{link.clicks.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {workspaces.slice(0, 2).map((workspace) => (
              <WorkspaceCard key={workspace.name} workspace={workspace} />
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Analytics snapshot</CardTitle>
            </CardHeader>
            <CardContent>
              <MiniChart />
              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <BarStack rows={deviceRows} />
                <BarStack rows={browserRows} />
              </div>
            </CardContent>
          </Card>
        </section>

        <aside className="grid gap-6">
          <QuickCreatePanel />
          <Card>
            <CardHeader>
              <CardTitle>Activity timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline />
            </CardContent>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <ShieldAlert className="size-5 text-status-warning" />
                <CardTitle>Security insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-text-secondary">27 risk events, 9 geography anomalies, 17 expiry drifts.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <CalendarClock className="size-5 text-accent-primary" />
                <CardTitle>Upcoming expiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-text-secondary">1,204 temporary links scheduled across 5 workspaces.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <QrCode className="size-5 text-accent-primary" />
                <CardTitle>Recent QR activity</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <QrPreview />
                <p className="text-sm leading-6 text-text-secondary">12 generated, 4 archived, 8 attached to campaigns.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <BellRing className="size-5 text-accent-primary" />
                <CardTitle>Notification stream</CardTitle>
              </CardHeader>
              <CardContent>
                <Timeline compact />
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}
