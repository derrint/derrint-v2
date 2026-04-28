import { ALL_PROJECTS } from "@/data/projects";
import type { ComponentType, SVGProps } from "react";
import { FiMonitor, FiSmartphone } from "react-icons/fi";

export type Stat = {
  value: string;
  label: string;
};

export type HeroTag = {
  title: string;
  subtitle: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  textColor: string;
  href: string;
};

const CAREER_START = new Date("2012-06-01T00:00:00Z");

function yearsSince(start: Date, now: Date = new Date()): number {
  let years = now.getUTCFullYear() - start.getUTCFullYear();
  const monthDiff = now.getUTCMonth() - start.getUTCMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getUTCDate() < start.getUTCDate())
  ) {
    years -= 1;
  }
  return years;
}

export const yearsOfExperience = yearsSince(CAREER_START);

export const STATS: readonly Stat[] = [
  { value: `+${yearsOfExperience}`, label: "Years of Experience" },
  { value: `+${ALL_PROJECTS.length}`, label: "Projects Completed" },
  { value: "+9", label: "Industries Involved" },
];

export const HERO_TAGS: readonly HeroTag[] = [
  {
    title: "FRONT-END DEVELOPMENT",
    subtitle: "React, Next.js, TypeScript",
    Icon: FiMonitor,
    color: "#2C2C2C",
    textColor: "#ffffff",
    href: "#",
  },
  {
    title: "MOBILE DEVELOPMENT",
    subtitle: "React Native, iOS, Android",
    Icon: FiSmartphone,
    color: "#f8f8f8",
    textColor: "#000000",
    href: "#",
  },
];
