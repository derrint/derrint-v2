"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiCalendar, FiMapPin, FiX } from "react-icons/fi";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkspaceCard } from "@/components/ui/workspace-card";
import { WORKSPACE_STORIES, type WorkspaceStory } from "@/data/workspace";

export function BehindTheWork() {
  const [activeStory, setActiveStory] = useState<WorkspaceStory | null>(null);

  useEffect(() => {
    if (!activeStory) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveStory(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeStory]);

  return (
    <Section id="thoughts">
      <SectionHeading line1="Behind" line2="the Work" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {WORKSPACE_STORIES.map((story) => (
          <WorkspaceCard
            key={story.title}
            {...story}
            onOpen={() => setActiveStory(story)}
          />
        ))}
      </div>
      {activeStory ? (
        <WorkspaceModal
          story={activeStory}
          onClose={() => setActiveStory(null)}
        />
      ) : null}
    </Section>
  );
}

type WorkspaceModalProps = {
  story: WorkspaceStory;
  onClose: () => void;
};

function WorkspaceModal({ story, onClose }: WorkspaceModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm md:items-center"
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
            <div className="flex flex-col justify-between gap-3 text-sm text-ink-400">
              <span className="inline-flex items-center gap-1">
                <FiMapPin className="h-3 w-3 shrink-0" />
                {story.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <FiCalendar className="h-3 w-3 shrink-0" />
                <time className="shrink-0">{story.date}</time>
              </span>
            </div>

            <h3 className="font-display text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl">
              {story.title}
            </h3>

            <p className="text-sm leading-relaxed text-ink-600 sm:text-base">
              {story.story}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BehindTheWork;
