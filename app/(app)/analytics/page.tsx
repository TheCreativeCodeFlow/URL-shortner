import { CalendarDays, GitCompareArrows } from "lucide-react";
import { BarStack } from "@/components/charts/bar-stack";
import { MiniChart } from "@/components/charts/mini-chart";
import { MetricCard } from "@/components/shared/metric-card";
import { PageHeader } from "@/components/shared/page-header";
import { Timeline } from "@/components/shared/timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { browserRows, countryRows, deviceRows, metrics, workspaces } from "@/mock/data";

export default function AnalyticsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <PageHeader
        eyebrow="Executive analytics"
        title="Traffic intelligence across every workspace"
        description="Trend analysis, geography, device and browser composition, workspace performance, click heatmaps, comparisons, and activity feed."
        actions={
          <>
            <Button variant="secondary">
              <CalendarDays data-icon="inline-start" />
              Last 30 days
            </Button>
            <Button>
              <GitCompareArrows data-icon="inline-start" />
              Compare
            </Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Traffic trends</CardTitle>
            <Tabs tabs={["Clicks", "Unique", "QR"]} />
          </CardHeader>
          <CardContent>
            <MiniChart className="h-80" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Country map placeholder</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid h-80 place-items-center rounded-panel border border-dashed border-border bg-surface-secondary">
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-text-primary">52 regions</p>
                <p className="mt-2 text-sm text-text-secondary">Geography surface reserved for map rendering.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <BarStack rows={deviceRows} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Browsers</CardTitle>
          </CardHeader>
          <CardContent>
            <BarStack rows={browserRows} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <BarStack rows={countryRows} />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader>
            <CardTitle>Workspace performance</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {workspaces.map((workspace) => (
              <div key={workspace.name} className="grid grid-cols-[1fr_96px_96px] items-center gap-3 rounded-ui border border-border bg-surface-secondary p-3 text-sm">
                <span className="font-medium text-text-primary">{workspace.name}</span>
                <span className="text-text-secondary">{workspace.clicks}</span>
                <span className="text-text-muted">{workspace.links} links</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Click heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, index) => (
                  <span
                    key={index}
                    className="h-7 rounded-[6px] bg-accent-primary"
                    style={{ opacity: 0.12 + ((index * 11) % 70) / 100 }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Activity feed</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline compact />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
