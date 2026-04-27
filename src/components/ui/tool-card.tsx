import type { Tool } from "@/data/tools";

export function ToolCard({
  name,
  description,
  initial,
  color,
  textColor = "#ffffff",
}: Tool) {
  return (
    <div className="flex items-center gap-3">
      <div
        aria-hidden
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-200/60 text-sm font-bold"
        style={{ backgroundColor: color, color: textColor }}
      >
        {initial}
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-sm font-semibold text-ink-950">
          {name}
        </p>
        <p className="truncate text-xs text-ink-500">{description}</p>
      </div>
    </div>
  );
}

export default ToolCard;
