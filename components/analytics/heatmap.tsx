export function Heatmap() {
  return (
    <div className="grid grid-cols-7 gap-2">
      {Array.from({ length: 35 }, (_, index) => (
        <span
          key={index}
          className="h-7 rounded-[6px] bg-accent-primary"
          style={{ opacity: 0.12 + ((index * 11) % 70) / 100 }}
        />
      ))}
    </div>
  );
}
