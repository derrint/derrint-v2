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
  bio: "Senior Front-End Engineer at KangarooHealth, building healthcare dashboards and remote patient monitoring solutions.",
  description:
    "Experienced crafting high-performance web and mobile products — across Healthcare, EdTech, Automotive, Marketplace, Broadcasting, Finance, Travel, and Hospitality.",
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
