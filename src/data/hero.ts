import { GridIcon, LayersIcon } from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

export type Stat = {
  value: string;
  label: string;
};

export type HeroTag = {
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  textColor: string;
  href: string;
};

export const STATS: readonly Stat[] = [
  { value: "+12", label: "Years of Experience" },
  { value: "+46", label: "Projects Completed" },
  { value: "+20", label: "Worldwide Clients" },
];

export const HERO_TAGS: readonly HeroTag[] = [
  {
    text: "Dynamic Animation, Motion Design",
    Icon: LayersIcon,
    color: "#000000",
    textColor: "#ffffff",
    href: "#",
  },
  {
    text: "Framer, Figma, WordPress, ReactJS",
    Icon: GridIcon,
    color: "#f8f8f8",
    textColor: "#000000",
    href: "#",
  },
];
