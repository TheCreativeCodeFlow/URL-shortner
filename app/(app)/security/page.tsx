import { AlertTriangle, FileClock, LockKeyhole, ShieldCheck } from "lucide-react";
import { SecurityScore } from "@/components/security/security-score";
import { PageHeader } from "@/components/shared/page-header";
import { StatusChip } from "@/components/shared/status-chip";
import { Timeline } from "@/components/shared/timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { securityRows } from "@/mock/data";

export default function SecurityPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <PageHeader
        eyebrow="Security operations"
        title="Protection, policy, and audit posture"
        description="Security score, protected links, threat timeline, access rules, expiry policies, audit records, risk matrix, alert center, and protection table."
        actions={<Button>Export Audit</Button>}
      />

      <SecurityScore />

      <section className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <LockKeyhole className="size-5 text-accent-primary" />
            <CardTitle>Protected links</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-4xl font-semibold text-text-primary">3,742</p>
            <p className="mt-2 text-sm text-text-secondary">Password, expiry, and workspace inheritance enabled.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <FileClock className="size-5 text-status-warning" />
            <CardTitle>Expiry policies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-4xl font-semibold text-text-primary">91%</p>
            <p className="mt-2 text-sm text-text-secondary">Temporary routes aligned to retention policy.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <AlertTriangle className="size-5 text-status-danger" />
            <CardTitle>Alert center</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-display text-4xl font-semibold text-text-primary">27</p>
            <p className="mt-2 text-sm text-text-secondary">Open risk events across active workspaces.</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Threat timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <Timeline />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Access rules and risk matrix</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[
              ["Password inheritance", 88],
              ["Workspace audit coverage", 96],
              ["Temporary expiry compliance", 72],
              ["Suspicious geography review", 64]
            ].map(([label, value]) => (
              <div key={label as string} className="rounded-ui border border-border bg-surface-secondary p-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-text-primary">{label}</span>
                  <span className="text-sm text-text-muted">{value}%</span>
                </div>
                <Progress value={Number(value)} />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader className="flex-row items-center gap-3">
          <ShieldCheck className="size-5 text-status-success" />
          <CardTitle>Protection table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rule</TableHead>
                  <TableHead>Scope</TableHead>
                  <TableHead>Events</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {securityRows.map((row) => (
                  <TableRow key={row.rule}>
                    <TableCell className="font-medium text-text-primary">{row.rule}</TableCell>
                    <TableCell>{row.scope}</TableCell>
                    <TableCell>{row.events}</TableCell>
                    <TableCell>
                      <StatusChip status={row.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
