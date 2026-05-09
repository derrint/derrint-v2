"use client";

import Image from "next/image";
import { FiCalendar, FiMapPin, FiX } from "react-icons/fi";
import type { WorkspaceStory } from "@/data/workspace";

type WorkspaceModalProps = {
  story: WorkspaceStory;
  onClose: () => void;
};

export function WorkspaceModal({ story, onClose }: WorkspaceModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <article
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_40px_100px_-40px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/90 text-ink-700 transition-colors hover:text-ink-950"
          aria-label="Close workspace detail"
        >
          <FiX className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[280px] bg-ink-100 md:min-h-[520px]">
            {story.photo ? (
              <Image
                src={story.photo}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_10%,rgba(255,255,255,0.35),transparent_55%)] bg-ink-200" />
            )}
          </div>

          <div className="flex flex-col gap-5 p-6 sm:p-7">
            <h3 className="font-display text-2xl font-semibold leading-tight text-ink-950 sm:text-3xl">
              {story.title}
            </h3>

            <div className="flex flex-row gap-6 text-sm text-ink-400">
              <span className="inline-flex items-center gap-1">
                <FiMapPin className="h-3 w-3 shrink-0" />
                {story.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <FiCalendar className="h-3 w-3 shrink-0" />
                <time className="shrink-0">{story.date}</time>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-ink-600 sm:text-base">
              {story.story}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default WorkspaceModal;
