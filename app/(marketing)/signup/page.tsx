import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Fingerprint, Rocket } from "lucide-react";
import { AuthPreview } from "@/components/auth/auth-preview";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = [
  { title: "Identity", detail: "Name and email context.", icon: Fingerprint },
  { title: "Usage type", detail: "Personal, team, or enterprise.", icon: BriefcaseBusiness },
  { title: "Workspace starter", detail: "Default workspace and controls.", icon: Rocket }
];

export default function SignupPage() {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] bg-canvas lg:grid-cols-[1fr_1fr]">
      <section className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl">
          <Logo />
          <h1 className="mt-10 font-display text-4xl font-semibold text-text-primary">Create your link operating system</h1>
          <p className="mt-3 text-sm leading-6 text-text-secondary">Three-step onboarding with local mock state and production-ready structure.</p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-panel border border-border bg-surface-primary p-4 shadow-small">
                <step.icon className="size-5 text-accent-primary" />
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted">Step {index + 1}</p>
                <h2 className="mt-1 font-display text-base font-semibold text-text-primary">{step.title}</h2>
                <p className="mt-1 text-xs leading-5 text-text-secondary">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-editorial border border-border bg-surface-primary p-5 shadow-small">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Full name" />
              <Input placeholder="Work email" type="email" />
              <select className="h-10 rounded-ui border border-border bg-surface-primary px-3 text-sm text-text-primary shadow-small focus-visible:premium-focus">
                <option>Team operations</option>
                <option>Personal publishing</option>
                <option>Enterprise governance</option>
              </select>
              <Input placeholder="Workspace name" />
            </div>
            <Button className="mt-5 w-full">
              Create mock workspace
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-text-secondary">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-accent-primary">
              Log in
            </Link>
          </p>
        </div>
      </section>
      <AuthPreview />
    </main>
  );
}
