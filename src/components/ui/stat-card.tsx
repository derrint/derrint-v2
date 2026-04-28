import type { Stat } from "@/data/hero";

export function StatCard({ value, label }: Stat) {
  return (
    <div className="flex flex-col">
      <span className="heading-display text-5xl font-bold leading-none text-ink-950 sm:text-6xl lg:text-7xl text-center lg:text-left">
        {value}
      </span>
      <span className="mt-2 sm:mt-3 max-w-36 text-sm font-semibold uppercase leading-tight sm:tracking-wider text-ink-500 text-center lg:text-left">
        {label}
      </span>
    </div>
  );
}

export default StatCard;
