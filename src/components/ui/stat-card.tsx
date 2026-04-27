import type { Stat } from "@/data/hero";

export function StatCard({ value, label }: Stat) {
  return (
    <div className="flex flex-col">
      <span className="heading-display text-5xl font-bold leading-none text-ink-950 sm:text-6xl">
        {value}
      </span>
      <span className="mt-3 max-w-[9rem] text-[11px] font-semibold uppercase leading-tight tracking-[0.15em] text-ink-500">
        {label}
      </span>
    </div>
  );
}

export default StatCard;
