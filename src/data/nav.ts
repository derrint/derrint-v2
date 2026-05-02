import type { ComponentType, SVGProps } from "react";
import {
  FiBriefcase,
  FiFolder,
  FiHome,
  FiLayers,
  FiImage,
} from "react-icons/fi";

export type NavItem = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#home", Icon: FiHome },
  { label: "Projects", href: "#projects", Icon: FiFolder },
  { label: "Experience", href: "#experience", Icon: FiBriefcase },
  { label: "Tech Stack", href: "#stack", Icon: FiLayers },
  { label: "Behind the Work", href: "#behind-the-work", Icon: FiImage },
];
