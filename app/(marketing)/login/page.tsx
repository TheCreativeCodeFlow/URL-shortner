import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AuthPreview } from "@/components/auth/auth-preview";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] bg-canvas lg:grid-cols-[0.9fr_1.1fr]">
      <section className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Logo />
          <h1 className="mt-10 font-display text-4xl font-semibold text-text-primary">Log in to ULP</h1>
          <p className="mt-3 text-sm leading-6 text-text-secondary">Minimal authentication surface for the frontend prototype.</p>
          <div className="mt-8 grid gap-4">
            <Input placeholder="Email address" type="email" />
            <Input placeholder="Password" type="password" />
            <Button>
              Continue
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-text-secondary">
            New workspace?{" "}
            <Link href="/signup" className="font-medium text-accent-primary">
              Start onboarding
            </Link>
          </p>
        </div>
      </section>
      <AuthPreview />
    </main>
  );
}
