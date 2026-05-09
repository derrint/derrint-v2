"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectModal } from "@/components/ui/project-modal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS, type Project } from "@/data/projects";

export function RecentProjects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeading line1="Recent" line2="Projects" />
      <ul className="border-t border-ink-200">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            {...project}
            onOpen={() => setActiveProject(project)}
          />
        ))}
      </ul>
      {activeProject ? (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      ) : null}
    </Section>
  );
}

export default RecentProjects;
