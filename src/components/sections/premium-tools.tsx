import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ToolCard } from "@/components/ui/tool-card";
import { TOOLS } from "@/data/tools";

export function PremiumTools() {
  return (
    <Section id="tools">
      <SectionHeading line1="Premium" line2="Tools" />
      <div className="grid grid-cols-1 gap-5 gap-y-6 sm:grid-cols-2">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </Section>
  );
}

export default PremiumTools;
