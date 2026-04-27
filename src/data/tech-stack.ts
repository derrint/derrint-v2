import type { ComponentType, SVGProps } from "react";
import {
  SiFigma,
  SiGit,
  SiJest,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type TechItem = {
  name: string;
  subtitle: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  iconColor?: string;
};

export const TECH_STACK: readonly TechItem[] = [
  {
    name: "TypeScript / JavaScript",
    subtitle: "Core Language",
    Icon: SiTypescript,
    color: "#3178c6",
  },
  {
    name: "React & React Native",
    subtitle: "Frontend & Mobile",
    Icon: SiReact,
    color: "#20232a",
  },
  {
    name: "Next.js",
    subtitle: "React Framework",
    Icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    subtitle: "Styling",
    Icon: SiTailwindcss,
    color: "#06b6d4",
  },
  {
    name: "Git & GitFlow",
    subtitle: "Version Control",
    Icon: SiGit,
    color: "#f05032",
  },
  {
    name: "Figma",
    subtitle: "Design Handoff",
    Icon: SiFigma,
    color: "#f24e1e",
  },
  {
    name: "Jest & RTL",
    subtitle: "Testing",
    Icon: SiJest,
    color: "#c21325",
  },
];
