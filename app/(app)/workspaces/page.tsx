import { LayoutGrid, PanelRight, Rows3 } from "lucide-react";
import { MiniChart } from "@/components/charts/mini-chart";
import { PageHeader } from "@/components/shared/page-header";
import { Timeline } from "@/components/shared/timeline";
import { LinkTable } from "@/components/tables/link-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { WorkspaceCard } from "@/components/workspace/workspace-card";
import { links, workspaces } from "@/mock/data";

export default function WorkspacesPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <PageHeader
        eyebrow="Workspace system"
        title="Segmented link operations"
        description="Gallery, table, and split-view patterns for personal, project, marketing, resume, and temporary link workspaces."
        actions={
          <>
            <Button variant="secondary">
              <Rows3 data-icon="inline-start" />
              Table
            </Button>
            <Button>
              <LayoutGrid data-icon="inline-start" />
              Gallery
            </Button>
          </>
        }
      />

      <div className="flex items-center justify-between gap-4">
        <Tabs tabs={["Gallery", "Table", "Split view"]} />
        <Button variant="ghost">
          <PanelRight data-icon="inline-start" />
          Detail panel
        </Button>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {workspaces.map((workspace) => (
          <WorkspaceCard key={workspace.name} workspace={workspace} />
        ))}
      </section>

      <section className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="grid min-w-0 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Workspace detail: Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-5">
                {["Overview", "Links", "Analytics", "Security", "Members"].map((item) => (
                  <div key={item} className="rounded-ui border border-border bg-surface-secondary p-4 text-sm font-medium text-text-primary">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <LinkTable />
        </div>

        <aside className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Stats panel</CardTitle>
            </CardHeader>
            <CardContent>
              <MiniChart className="h-32" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["Links", "1,292"],
                  ["Clicks", "5.2M"],
                  ["QR", "284"],
                  ["Risk", "Low"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-ui bg-surface-secondary p-3">
                    <p className="text-[11px] uppercase tracking-[0.08em] text-text-muted">{label}</p>
                    <p className="mt-1 font-semibold text-text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pinned links</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {links.slice(0, 3).map((link) => (
                <div key={link.id} className="rounded-ui border border-border bg-surface-secondary p-3">
                  <p className="font-medium text-text-primary">{link.shortUrl}</p>
                  <p className="mt-1 truncate text-sm text-text-secondary">{link.destination}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline compact />
            </CardContent>
          </Card>
        </aside>
      </section>
    </div>
  );
}
