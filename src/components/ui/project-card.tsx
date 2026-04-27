import { ArrowUpRightIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

export function ProjectCard({
  name,
  category,
  accent,
  href = "#",
}: Project) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-center gap-5 border-b border-ink-200 py-5 transition-colors hover:border-ink-400"
      >
        <ProjectThumbnail color={accent} />

        <div className="min-w-0 flex-1">
          <p className="font-display text-lg font-semibold text-ink-950">
            {name}
          </p>
          <p className="text-xs text-ink-500">{category}</p>
        </div>

        <span
          aria-hidden
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-500 transition-all group-hover:bg-ink-950 group-hover:text-white"
        >
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </a>
    </li>
  );
}

function ProjectThumbnail({ color }: { color: string }) {
  return (
    <div
      className="relative flex h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-ink-200"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="absolute inset-x-2 top-2 h-2 rounded-full bg-white/30" />
      <div className="absolute inset-x-2 bottom-2 h-1 rounded-full bg-white/20" />
    </div>
  );
}

export default ProjectCard;
