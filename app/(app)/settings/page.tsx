import { Bell, Fingerprint, MonitorCog, Palette, Shield, SlidersHorizontal, UserRound } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const settings = [
  { title: "Profile", detail: "Name, role, avatar fallback, and local identity state.", icon: UserRound },
  { title: "Appearance", detail: "Density, sidebar behavior, navigation labels, and command surface.", icon: Palette },
  { title: "Workspace defaults", detail: "Default workspace, QR generation, expiry window, and aliases.", icon: SlidersHorizontal },
  { title: "Security preferences", detail: "Password defaults, audit visibility, and alert thresholds.", icon: Shield },
  { title: "Notifications", detail: "Expiry, risk, QR, workspace, and weekly digest notifications.", icon: Bell },
  { title: "Feature toggles", detail: "Preview surfaces for future AI layer and advanced analytics.", icon: MonitorCog }
];

export default function SettingsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <PageHeader
        eyebrow="Settings"
        title="Personal and workspace defaults"
        description="Frontend-only preferences for profile, appearance, theme, workspace defaults, security, notifications, and feature toggles."
        actions={<Button>Save Preferences</Button>}
      />

      <Card>
        <CardHeader className="flex-row items-center gap-3">
          <Fingerprint className="size-5 text-accent-primary" />
          <CardTitle>Theme</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-text-secondary">Global light, dark, and system theme detection. All pages inherit the same product tokens.</p>
          <ThemeToggle />
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {settings.map((item, index) => (
          <Card key={item.title}>
            <CardHeader className="flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-ui border border-border bg-surface-secondary">
                  <item.icon className="size-4 text-accent-primary" />
                </span>
                <CardTitle>{item.title}</CardTitle>
              </div>
              <Switch defaultChecked={index !== 4} label={`Toggle ${item.title}`} />
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-text-secondary">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
