import { FiArrowUpRight } from "react-icons/fi";
import type { HeroTag } from "@/data/hero";

export function TagCard({
  title,
  subtitle,
  Icon,
  color,
  textColor,
  href,
}: HeroTag) {
  return (
    <a
      href={href}
      className="group relative flex h-44 flex-col justify-between overflow-hidden rounded-3xl p-5 transition-transform hover:-translate-y-1"
      style={{ backgroundColor: color, color: textColor }}
    >
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.18] mix-blend-multiply"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M-20 40 Q 60 20 140 60 T 320 90"
          fill="none"
          stroke={textColor}
          strokeWidth="1.2"
        />
        <path
          d="M-20 110 Q 60 90 140 130 T 320 160"
          fill="none"
          stroke={textColor}
          strokeWidth="1.2"
        />
      </svg>

      <div
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/20 bg-black/5"
        aria-hidden
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="relative flex flex-col justify-between">
        <p className="font-display text-base font-bold uppercase leading-tight tracking-tight sm:text-lg">
          {title}
        </p>

        <div className="relative flex items-end justify-between gap-4">
          <p className="text-sm leading-relaxed text-ink-500 sm:text-base">
            {subtitle}
          </p>
          <span
            aria-hidden
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-black/20 bg-black/5 transition-colors group-hover:bg-black/10"
          >
            <FiArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}

export default TagCard;
