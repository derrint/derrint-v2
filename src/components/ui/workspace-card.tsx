import Image from "next/image";

import { FiMapPin } from "react-icons/fi";
import type { WorkspaceStory } from "@/data/workspace";

type WorkspaceCardProps = WorkspaceStory & {
  onOpen?: () => void;
};

export function WorkspaceCard({
  title,
  location,
  date,
  photo,
  story,
  onOpen,
}: WorkspaceCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card-surface group flex h-full w-full flex-col overflow-hidden text-left"
      aria-label={`Open details for ${title}`}
    >
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-ink-100">
        {photo ? (
          <Image
            src={photo}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_10%,rgba(255,255,255,0.35),transparent_55%)] bg-ink-200" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-ink-400">
          <span className="inline-flex items-center gap-1">
            <FiMapPin className="h-3 w-3 shrink-0" />
            {location}
          </span>
          <time className="shrink-0">{date}</time>
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug text-ink-950 transition-colors group-hover:text-ink-700">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-ink-600">
          {story}
        </p>
      </div>
    </button>
  );
}

export default WorkspaceCard;
