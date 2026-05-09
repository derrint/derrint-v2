"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkspaceCard } from "@/components/ui/workspace-card";
import { WorkspaceModal } from "@/components/ui/workspace-modal";
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
    <Section id="behind-the-work">
      <SectionHeading line1="Behind" line2="the Work" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {WORKSPACE_STORIES.map((story) => (
          <WorkspaceCard
            key={story.title}
            {...story}
            layoutIdBase={`workspace-${story.title}`}
            onOpen={() => setActiveStory(story)}
          />
        ))}
      </div>
      <AnimatePresence>
        {activeStory ? (
          <WorkspaceModal
            story={activeStory}
            layoutIdBase={`workspace-${activeStory.title}`}
            onClose={() => setActiveStory(null)}
          />
        ) : null}
      </AnimatePresence>
    </Section>
  );
}

export default BehindTheWork;
