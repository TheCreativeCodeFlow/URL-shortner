import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingPlans } from "@/mock/data";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-14 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Pricing"
        title="Luxury enterprise pricing without the theatrical packaging"
        description="Plans for personal publishing, team operations, advanced link intelligence, and enterprise governance."
      />

      <section className="grid gap-4 lg:grid-cols-4">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(plan.highlighted && "border-accent-primary shadow-large")}
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle>{plan.name}</CardTitle>
                {plan.highlighted && <span className="rounded-full bg-accent-primary px-2 py-1 text-[11px] font-medium text-white">Pro</span>}
              </div>
              <p className="text-sm leading-6 text-text-secondary">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <p className="font-display text-4xl font-semibold text-text-primary">{plan.price}</p>
              <p className="mt-1 text-sm text-text-muted">{plan.price === "Custom" ? "Designed with your team" : "per seat / month"}</p>
              <div className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Check className="size-4 text-status-success" />
                    {feature}
                  </div>
                ))}
              </div>
              <Button className="mt-6 w-full" variant={plan.highlighted ? "default" : "secondary"} asChild>
                <Link href="/signup">Choose {plan.name}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-editorial border border-border bg-surface-primary p-6 shadow-small">
        <h2 className="font-display text-2xl font-semibold text-text-primary">Comparison matrix</h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-panel border border-border bg-border md:grid-cols-4">
          {["Analytics retention", "Security policy", "QR operations", "Audit records", "Workspace controls", "Support tier", "Future AI layer", "Custom governance"].map((item) => (
            <div key={item} className="bg-surface-primary p-4 text-sm text-text-secondary">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <ShieldCheck className="size-5 text-status-success" />
            <CardTitle>Enterprise CTA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-text-secondary">Security review, retention policy mapping, workspace architecture, and operational rollout planning.</p>
            <Button className="mt-6" asChild>
              <Link href="/signup">Start Enterprise Review</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[
              ["Is this connected to a backend?", "No. This build is frontend-only with mock state as requested."],
              ["Does theme mode persist?", "next-themes handles local theme preference and system detection."],
              ["Can this support real APIs later?", "The UI architecture is intentionally separated from data sources."]
            ].map(([question, answer]) => (
              <div key={question} className="rounded-ui border border-border bg-surface-secondary p-4">
                <p className="font-medium text-text-primary">{question}</p>
                <p className="mt-1 text-sm text-text-secondary">{answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
