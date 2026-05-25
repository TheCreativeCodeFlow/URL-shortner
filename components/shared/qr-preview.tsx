export function QrPreview() {
  const cells = Array.from({ length: 49 }, (_, index) => index);
  return (
    <div className="grid size-28 grid-cols-7 gap-1 rounded-ui border border-border bg-surface-primary p-2 shadow-small">
      {cells.map((cell) => (
        <span
          key={cell}
          className={
            cell % 2 === 0 || cell === 9 || cell === 39 || cell === 45
              ? "rounded-[2px] bg-text-primary"
              : "rounded-[2px] bg-surface-tertiary"
          }
        />
      ))}
    </div>
  );
}
