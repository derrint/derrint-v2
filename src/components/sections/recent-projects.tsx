import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS } from "@/data/projects";

export function RecentProjects() {
  return (
    <Section id="projects">
      <SectionHeading line1="Recent" line2="Projects" />
      <ul className="border-t border-ink-200">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </ul>
    </Section>
  );
}

export default RecentProjects;
