import type { ComponentType, SVGProps } from "react";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

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
    "Experienced crafting high-performance web and mobile products — across Healthcare, EduTech, Automotive, Marketplace, Broadcasting, Finance, Travel, and Hospitality.",
  email: "hello@sawad.design",
  location: "Remote · Worldwide",
} as const;

export const SOCIALS: readonly Social[] = [
  { label: "GitHub", href: "https://github.com/derrint", Icon: FiGithub },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lorensioderrint/",
    Icon: FiInstagram,
  },
  { label: "Twitter", href: "https://twitter.com/derrint", Icon: FiTwitter },
  {
    label: "Facebook",
    href: "https://www.facebook.com/derrint",
    Icon: FiFacebook,
  },
  {
    label: "LinkedIn",
    href: "https://id.linkedin.com/in/lorensioderrint",
    Icon: FiLinkedin,
  },
];

export const FOOTER_SOCIALS = [
  { label: "GitHub", href: "https://github.com/derrint" },
  { label: "LinkedIn", href: "https://id.linkedin.com/in/lorensioderrint" },
  { label: "Instagram", href: "https://www.instagram.com/lorensioderrint/" },
  { label: "Twitter", href: "https://twitter.com/derrint" },
  // { label: "Facebook", href: "https://www.facebook.com/derrint" },
] as const;
