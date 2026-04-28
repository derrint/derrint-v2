import type { TechItem } from "@/data/tech-stack";

export function TechCard({
  name,
  subtitle,
  Icon,
  color,
  iconColor = "#ffffff",
}: TechItem) {
  return (
    <div className="flex items-center gap-3">
      <div
        aria-hidden
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: color }}
      >
        <Icon className="h-7 w-7" style={{ color: iconColor }} />
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-md font-semibold text-ink-950">
          {name}
        </p>
        <p className="truncate text-sm text-ink-500">{subtitle}</p>
      </div>
    </div>
  );
}

export default TechCard;
