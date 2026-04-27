import {
  DribbbleIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

export type Social = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const PROFILE = {
  name: "Lorensio Derrint",
  role: "Software Engineer",
  bio: "A Software Engineer who has developed countless innovative solutions.",
  description:
    "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
  email: "hello@sawad.design",
  location: "Remote · Worldwide",
} as const;

export const SOCIALS: readonly Social[] = [
  { label: "Dribbble", href: "#", Icon: DribbbleIcon },
  { label: "Twitter", href: "#", Icon: TwitterIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
];

export const FOOTER_SOCIALS = [
  { label: "Twitter", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
] as const;
