import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechCard } from "@/components/ui/tech-card";
import { TECH_STACK } from "@/data/tech-stack";

export function TechStack() {
  return (
    <Section id="stack">
      <SectionHeading line1="Tech" line2="Stack" />
      <div className="grid grid-cols-1 gap-5 gap-y-6 md:grid-cols-3 lg:grid-cols-2">
        {TECH_STACK.map((item) => (
          <TechCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  );
}

export default TechStack;
