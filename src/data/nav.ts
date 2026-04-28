import type { ComponentType, SVGProps } from "react";
import { FiBriefcase, FiFolder, FiHome, FiLayers, FiEdit2 } from "react-icons/fi";

export type NavItem = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#home", Icon: FiHome },
  { label: "Projects", href: "#projects", Icon: FiFolder },
  { label: "Experience", href: "#experience", Icon: FiBriefcase },
  { label: "Tech Stack", href: "#tools", Icon: FiLayers },
  { label: "Thoughts", href: "#thoughts", Icon: FiEdit2 },
];
