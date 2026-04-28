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
  const isDark = textColor === "#ffffff";

  const borderCls = isDark ? "border-white/20" : "border-black/15";
  const bgCls = isDark ? "bg-white/10" : "bg-black/5";
  const hoverBgCls = isDark
    ? "group-hover:bg-white/20"
    : "group-hover:bg-black/10";
  const subtitleCls = isDark ? "text-white/50" : "text-black/40";

  return (
    <a
      href={href}
      className="group relative flex h-44 flex-col justify-between overflow-hidden rounded-3xl p-5 transition-transform hover:-translate-y-1"
      style={{ backgroundColor: color, color: textColor }}
    >
      <svg
        aria-hidden
        className={`absolute inset-0 h-full w-full ${isDark ? "opacity-10 mix-blend-screen" : "opacity-10 mix-blend-multiply"}`}
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M-20 40 Q 60 20 140 60 T 320 90"
          fill="none"
          stroke={textColor}
          strokeWidth="1.5"
          className={isDark ? "animate-wave" : "animate-wave-y"}
        />
        <path
          d="M-20 110 Q 60 90 140 130 T 320 160"
          fill="none"
          stroke={textColor}
          strokeWidth="1.5"
          className={isDark ? "animate-wave-slow" : "animate-wave-y-slow"}
        />
      </svg>

      <div
        className={`relative inline-flex h-9 w-9 items-center justify-center rounded-lg border ${borderCls} ${bgCls}`}
        aria-hidden
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="relative flex flex-col gap-1">
        <p className="font-display text-base font-bold uppercase leading-tight tracking-tight sm:text-lg">
          {title}
        </p>

        <div className="flex items-end justify-between gap-4">
          <p className={`text-xs leading-relaxed ${subtitleCls}`}>{subtitle}</p>
          <span
            aria-hidden
            className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border ${borderCls} ${bgCls} ${hoverBgCls} transition-colors`}
          >
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

export default TagCard;
