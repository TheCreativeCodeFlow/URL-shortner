import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuickCreatePanel } from "@/components/dashboard/quick-create-panel";
import { InsightCard } from "@/components/shared/insight-card";
import { MetricCard } from "@/components/shared/metric-card";
import { ProductPreview } from "@/components/landing/product-preview";
import { Timeline } from "@/components/shared/timeline";
import { WorkspaceCard } from "@/components/workspace/workspace-card";
import { featureBlocks, metrics, platformHighlights, workflow, workspaces } from "@/mock/data";
import { Reveal } from "@/components/shared/reveal";

export default function LandingPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="absolute inset-0 surface-grid opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-20">
          <Reveal className="flex flex-col justify-center">
            <Badge>Premium link infrastructure</Badge>
            <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] text-text-primary md:text-7xl">
              Universal Link Platform
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              An intelligent link operating system for teams that treat short links, QR assets, analytics, and security policy as infrastructure.
            </p>
            <div className="mt-8 grid max-w-2xl gap-4">
              <QuickCreatePanel />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Workspace
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/dashboard">Open Console</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <ProductPreview />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline bg-surface-primary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} compact />
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge>Link OS modules</Badge>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-text-primary">
            Dense infrastructure controls with editorial clarity.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureBlocks.map((feature) => (
            <InsightCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface-primary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <Badge>Workflow timeline</Badge>
            <h2 className="mt-5 font-display text-4xl font-semibold text-text-primary">Create, govern, observe, automate.</h2>
            <p className="mt-4 text-base leading-7 text-text-secondary">
              The product model is intentionally compact: creation flows into policy, policy flows into analytics, analytics feeds operational action.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {workflow.map((item, index) => (
              <div key={item.title} className="rounded-panel border border-border bg-canvas p-5">
                <span className="text-xs font-semibold text-text-muted">0{index + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge>Workspace preview</Badge>
            <h2 className="mt-5 font-display text-4xl font-semibold text-text-primary">Every link belongs somewhere.</h2>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/workspaces">View Workspaces</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workspaces.slice(0, 3).map((workspace) => (
            <WorkspaceCard key={workspace.name} workspace={workspace} />
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface-primary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <Badge>Security overview</Badge>
            <h2 className="mt-5 font-display text-4xl font-semibold text-text-primary">Policy-first link operations.</h2>
            <div className="mt-8 grid gap-3">
              {["Password rules", "Expiry policies", "Workspace audit", "Risk matrix"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-ui border border-border bg-canvas p-4">
                  <CheckCircle2 className="size-4 text-status-success" />
                  <span className="text-sm font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-editorial border border-border bg-canvas p-6">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {platformHighlights.map((item) => (
            <div key={item.label} className="rounded-panel border border-border bg-surface-primary p-5 shadow-small">
              <item.icon className="size-5 text-accent-primary" />
              <p className="mt-5 text-sm text-text-muted">{item.label}</p>
              <p className="mt-1 font-display text-3xl font-semibold text-text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline bg-surface-primary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <Badge>Roadmap</Badge>
            <h2 className="mt-5 font-display text-4xl font-semibold text-text-primary">Built for the next layer of link intelligence.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
              AI-assisted aliasing, anomaly briefings, automated policy recommendations, and workspace-level campaign intelligence are designed into the information architecture.
            </p>
            <div className="mt-8 flex gap-3">
              <Button asChild>
                <Link href="/pricing">Compare Plans</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/security">Review Security</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-editorial border border-border bg-canvas p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="size-5 text-accent-primary" />
              <h3 className="font-display text-xl font-semibold text-text-primary">Future AI layer</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              The frontend reserves space for recommendations, generated summaries, and proactive link operations without depending on any backend integration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-text-primary text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Building2 className="size-4" />
              Enterprise CTA
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold">Operate links like infrastructure.</h2>
          </div>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/signup">Create ULP Workspace</Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-hairline bg-surface-primary">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-text-secondary sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Universal Link Platform</p>
          <div className="flex gap-4">
            <Link href="/security">Security</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/dashboard">Console</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
