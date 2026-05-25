"use client";

import { CalendarClock, KeyRound, QrCode, Wand2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { workspaces } from "@/mock/data";

export function QuickCreatePanel() {
  const [qr, setQr] = useState(true);
  const [password, setPassword] = useState(false);

  return (
    <div className="rounded-panel border border-border bg-surface-primary p-5 shadow-large">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-text-primary">Create Intelligent Link</h3>
          <p className="mt-1 text-sm text-text-secondary">Mock creation flow with policy-ready controls.</p>
        </div>
        <span className="grid size-9 place-items-center rounded-ui border border-border bg-surface-secondary">
          <Wand2 className="size-4 text-accent-primary" />
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <Input placeholder="https://destination.com/launch" />
        <div className="grid gap-3 sm:grid-cols-2">
          <Input placeholder="custom-alias" />
          <select className="h-10 rounded-ui border border-border bg-surface-primary px-3 text-sm text-text-primary shadow-small focus-visible:premium-focus">
            {workspaces.map((workspace) => (
              <option key={workspace.name}>{workspace.name}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex h-11 items-center justify-between rounded-ui border border-border bg-surface-secondary px-3">
            <span className="flex items-center gap-2 text-sm text-text-secondary">
              <KeyRound className="size-4 text-text-muted" />
              Password
            </span>
            <Switch checked={password} onCheckedChange={setPassword} label="Toggle password protection" />
          </label>
          <label className="flex h-11 items-center justify-between rounded-ui border border-border bg-surface-secondary px-3">
            <span className="flex items-center gap-2 text-sm text-text-secondary">
              <QrCode className="size-4 text-text-muted" />
              QR
            </span>
            <Switch checked={qr} onCheckedChange={setQr} label="Toggle QR generation" />
          </label>
        </div>
        <label className="flex h-11 items-center gap-2 rounded-ui border border-border bg-surface-secondary px-3 text-sm text-text-secondary">
          <CalendarClock className="size-4 text-text-muted" />
          <span>Expiry</span>
          <select className="ml-auto bg-transparent text-sm text-text-primary focus:outline-none">
            <option>Never</option>
            <option>24 hours</option>
            <option>7 days</option>
            <option>30 days</option>
          </select>
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button className="flex-1">Generate Link</Button>
        <Button variant="secondary" className="flex-1">
          Save Draft
        </Button>
      </div>
    </div>
  );
}
