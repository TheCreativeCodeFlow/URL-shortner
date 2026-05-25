import type { Workspace } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  const riskVariant = workspace.risk === "High" ? "danger" : workspace.risk === "Medium" ? "warning" : "success";

  return (
    <Card className="transition-transform duration-200 ease-product hover:-translate-y-0.5">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className={cn("size-3 rounded-full", workspace.accent)} />
            <CardTitle>{workspace.name}</CardTitle>
          </div>
          <Badge variant={riskVariant}>{workspace.risk}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="min-h-12 text-sm leading-6 text-text-secondary">{workspace.description}</p>
        <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-[0.08em] text-text-muted">Links</p>
            <p className="mt-1 font-semibold text-text-primary">{workspace.links}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.08em] text-text-muted">Clicks</p>
            <p className="mt-1 font-semibold text-text-primary">{workspace.clicks}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.08em] text-text-muted">Members</p>
            <p className="mt-1 font-semibold text-text-primary">{workspace.members}</p>
          </div>
        </div>
        <Progress value={workspace.risk === "High" ? 82 : workspace.risk === "Medium" ? 56 : 28} className="mt-5" />
      </CardContent>
    </Card>
  );
}
