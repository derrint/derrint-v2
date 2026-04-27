import type { ComponentType, SVGProps } from "react";
import { LuBriefcase, LuFolder, LuHouse, LuLayers, LuPencil } from "react-icons/lu";

export type NavItem = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#home", Icon: LuHouse },
  { label: "Projects", href: "#projects", Icon: LuFolder },
  { label: "Experience", href: "#experience", Icon: LuBriefcase },
  { label: "Tech Stack", href: "#tools", Icon: LuLayers },
  { label: "Thoughts", href: "#thoughts", Icon: LuPencil },
];
