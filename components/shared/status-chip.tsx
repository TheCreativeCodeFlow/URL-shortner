import { Badge } from "@/components/ui/badge";

type StatusChipProps = {
  status: string;
};

export function StatusChip({ status }: StatusChipProps) {
  const variant =
    status === "Healthy" || status === "Live" || status === "Contained"
      ? "success"
      : status === "Review" || status === "Expiring" || status === "Watch"
        ? "warning"
        : status === "Paused"
          ? "danger"
          : "default";

  return <Badge variant={variant}>{status}</Badge>;
}
