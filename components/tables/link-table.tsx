"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusChip } from "@/components/shared/status-chip";
import { useMockLinkStore } from "@/store/mock-store";

export function LinkTable() {
  const { query, setQuery, links } = useMockLinkStore();

  return (
    <div className="rounded-panel border border-border bg-surface-primary shadow-small">
      <div className="flex flex-col gap-3 border-b border-hairline p-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-display text-base font-semibold text-text-primary">Advanced Link Table</h3>
          <p className="text-sm text-text-secondary">Policy, expiry, QR, and analytics context in one operational view.</p>
        </div>
        <div className="relative md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search links" className="pl-9" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Short URL</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Workspace</TableHead>
              <TableHead>Clicks</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Expiry</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((link) => (
              <TableRow key={link.id}>
                <TableCell className="font-medium text-text-primary">{link.shortUrl}</TableCell>
                <TableCell className="min-w-72 max-w-96 truncate">{link.destination}</TableCell>
                <TableCell>{link.workspace}</TableCell>
                <TableCell>{link.clicks.toLocaleString()}</TableCell>
                <TableCell>
                  <StatusChip status={link.status} />
                </TableCell>
                <TableCell>{link.expires}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
