import { ArrowUpRightIcon } from "@/components/icons";
import type { Experience } from "@/data/experience";

export function ExperienceItem({
  company,
  description,
  period,
}: Experience) {
  return (
    <li>
      <a
        href="#"
        className="group flex items-start gap-6 border-b border-ink-200 py-6 transition-colors hover:border-ink-400"
      >
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-ink-950 transition-colors group-hover:text-[#ff6b2c]">
            {company}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-600">
            {description}
          </p>
          <p className="mt-3 text-xs text-ink-500">{period}</p>
        </div>

        <span
          aria-hidden
          className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-500 transition-all group-hover:bg-ink-950 group-hover:text-white"
        >
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </a>
    </li>
  );
}

export default ExperienceItem;
