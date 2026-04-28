import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkspaceCard } from "@/components/ui/workspace-card";
import { WORKSPACE_STORIES } from "@/data/workspace";

export function BehindTheWork() {
  return (
    <Section id="thoughts">
      <SectionHeading line1="Behind" line2="the Work" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {WORKSPACE_STORIES.map((story) => (
          <WorkspaceCard key={story.title} {...story} />
        ))}
      </div>
    </Section>
  );
}

export default BehindTheWork;
