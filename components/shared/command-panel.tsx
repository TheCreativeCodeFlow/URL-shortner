"use client";

import { Input } from "@/components/ui/input";

const commands = ["Create protected link", "Open analytics comparison", "Review expiry queue", "Generate QR batch"];

export function CommandPanel() {
  return (
    <>
      <Input placeholder="Type a command, link, workspace, policy, or route" autoFocus />
      <div className="mt-4 grid gap-2">
        {commands.map((item) => (
          <button
            key={item}
            type="button"
            className="rounded-ui border border-border bg-surface-secondary px-3 py-3 text-left text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
