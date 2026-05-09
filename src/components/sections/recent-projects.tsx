"use client";

import { AnimatePresence } from "framer-motion";
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
            layoutIdBase={`project-${project.name}`}
            onOpen={() => setActiveProject(project)}
          />
        ))}
      </ul>
      <AnimatePresence>
        {activeProject ? (
          <ProjectModal
            project={activeProject}
            layoutIdBase={`project-${activeProject.name}`}
            onClose={() => setActiveProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </Section>
  );
}

export default RecentProjects;
