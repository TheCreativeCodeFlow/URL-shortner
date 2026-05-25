import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Universal Link Platform home">
      <span className="grid size-9 place-items-center rounded-ui border border-border bg-surface-primary shadow-small">
        <span className="size-3 rounded-[4px] bg-accent-primary" />
      </span>
      <span className="font-display text-sm font-semibold tracking-[0.08em] text-text-primary">ULP</span>
    </Link>
  );
}
