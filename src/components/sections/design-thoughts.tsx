import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ThoughtCard } from "@/components/ui/thought-card";
import { THOUGHTS } from "@/data/thoughts";

export function DesignThoughts() {
  return (
    <Section id="thoughts">
      <SectionHeading line1="Design" line2="Thoughts" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {THOUGHTS.map((post) => (
          <ThoughtCard key={post.title} {...post} />
        ))}
      </div>
    </Section>
  );
}

export default DesignThoughts;
