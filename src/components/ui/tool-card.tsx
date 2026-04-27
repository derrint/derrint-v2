import type { Tool } from "@/data/tools";

export function ToolCard({ name, subtitle, Icon, color, iconColor = "#ffffff" }: Tool) {
  return (
    <div className="flex items-center gap-3">
      <div
        aria-hidden
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: color }}
      >
        <Icon className="h-6 w-6" style={{ color: iconColor }} />
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-sm font-semibold text-ink-950">
          {name}
        </p>
        <p className="truncate text-xs text-ink-500">{subtitle}</p>
      </div>
    </div>
  );
}

export default ToolCard;
