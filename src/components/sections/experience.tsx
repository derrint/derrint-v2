import { ExperienceItem } from "@/components/ui/experience-item";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { EXPERIENCES } from "@/data/experience";
import { yearsOfExperience } from "@/data/hero";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        line1={`${yearsOfExperience} Years of`}
        line2="Experience"
      />
      <ol className="border-t border-ink-200">
        {EXPERIENCES.map((item) => (
          <ExperienceItem key={item.company} {...item} />
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
