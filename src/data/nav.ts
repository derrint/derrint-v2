import {
  BriefcaseIcon,
  FolderIcon,
  HomeIcon,
  PencilIcon,
  ToolIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

export type NavItem = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#home", Icon: HomeIcon },
  { label: "Projects", href: "#projects", Icon: FolderIcon },
  { label: "Experience", href: "#experience", Icon: BriefcaseIcon },
  { label: "Tech Stack", href: "#tools", Icon: ToolIcon },
  { label: "Thoughts", href: "#thoughts", Icon: PencilIcon },
];
