export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  stack: string;
  accent: string;
  /** Lightweight image for cards/lists. */
  thumbnail: string;
  /** HD preview image for the modal. */
  fullImage: string;
  href?: string;
};

export const PROJECTS: readonly Project[] = [
  {
    name: "GIIAS Auto360",
    category: "Mobile App · Front-End",
    year: "2020 – 2022",
    description:
      "A brand new Event Supporting / News Portal / Automotive Marketplace",
    stack: "React Native, Go, PostgreSQL",
    accent: "#0a0a0a",
    thumbnail: "/portfolio/auto360/cover-thumb.webp",
    fullImage: "/portfolio/auto360/screenshot-full.webp",
    href: "https://play.google.com/store/apps/details?id=com.seven.auto360Id&hl=id",
  },
  {
    name: "Sophtron",
    category: "Web & Mobile · Front-End",
    year: "2022",
    description:
      "A widget which wraps multiple payment providers data aggregation in a single web app",
    stack: "React, React Native",
    accent: "#1a1a1a",
    thumbnail: "/portfolio/sophtron/cover-thumb.webp",
    fullImage: "/portfolio/sophtron/screenshot-full.webp",
    href: "https://sophtron-web.vercel.app/",
  },
  {
    name: "Yooniez",
    category: "Web App · Front-End",
    year: "2022",
    description:
      "An interactive 3D web app wrapper & landing page for NFT Game",
    stack: "React + NextJS, ThreeJS",
    accent: "#444444",
    thumbnail: "/portfolio/yooniez/cover-thumb.webp",
    fullImage: "/portfolio/yooniez/screenshot-full.webp",
    href: "https://yooniez-derrint.vercel.app/",
  },
  {
    name: "Vessel",
    category: "Web App · Front-End",
    year: "2022",
    description:
      "A rich animated landing page for Vessel blockchain network & app SDK",
    stack: "React + NextJS",
    accent: "#888888",
    thumbnail: "/portfolio/vessel/cover-thumb.webp",
    fullImage: "/portfolio/vessel/screenshot-full.webp",
    href: "https://vessel-block-explorer-web.vercel.app/",
  },
  {
    name: "Simple Duck Studios",
    category: "Web App · Full-Stack",
    year: "2022",
    description: "A playable & interactive landing page for creative agency",
    stack: "React + NextJS",
    accent: "#dfdfdf",
    thumbnail: "/portfolio/simple-duck-studios/cover-thumb.webp",
    fullImage: "/portfolio/simple-duck-studios/screenshot-full.webp",
    href: "https://simple-duck-studios.vercel.app/",
  },
  {
    name: "Diamond Hands",
    category: "Web App · Front-End",
    year: "2021 – 2022",
    description:
      "A new Marketplace / Landing Page / Game Supporting website app related to NFT & Cryptocurrency",
    stack: "React + NextJS, Go",
    accent: "#0a0a0a",
    thumbnail: "/portfolio/diamond-hands/cover-thumb.webp",
    fullImage: "/portfolio/diamond-hands/screenshot-full.webp",
    href: "https://diamond-hands-eight.vercel.app/",
  },
  {
    name: "Dasbor Ukur Layanan KUA",
    category: "Mobile App · Full-Stack",
    year: "2021",
    description: "A brand new public service mobile app from KEMENAG RI",
    stack: "React Native, PHP, MySQL",
    accent: "#1a1a1a",
    thumbnail: "/portfolio/dulk/cover-thumb.webp",
    fullImage: "/portfolio/dulk/screenshot-full.webp",
  },
  {
    name: "TVRI Klik",
    category: "Mobile App · Full-Stack",
    year: "2021",
    description:
      "A rebranded TV live streaming service & TV On-demand mobile app from TVRI",
    stack: "React Native, PHP, MySQL",
    accent: "#444444",
    thumbnail: "/portfolio/tvri/cover-thumb.webp",
    fullImage: "/portfolio/tvri/screenshot-full.webp",
    href: "https://play.google.com/store/apps/details?id=com.tvriklikv2&hl=id",
  },
];

export const ALL_PROJECTS = [
  // KangarooHealth
  "provider-dashboard",
  "patient-referral",
  "patient-self-signup",
  // Quipper
  "blackboard",
  "qcreate-react",
  "qlearn-react",
  `qlink-next`,
  `qlink-react`,
  // Qlip
  "avidx",
  "diamond-hands",
  "simple-duck-studios",
  "vessel",
  "vessel-blockchain-explorer",
  "yooniez",
  // Pak Me
  "kemenag-dulk",
  "kemenkumham-econsul",
  "tvri-klik",
  // Kano
  "kanitax",
  "iag-carrem",
  "hms-sktis",
  "scb-data-catalogue",
  // Kepanjen
  "dvc-invoice-reminder",
  "dvc-etoko",
  "natha-ayu",
  // Personal
  "todo-app",
  "sophtron",
];
