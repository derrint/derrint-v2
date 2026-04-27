export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  stack: string;
  accent: string;
  cover?: string;
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
    cover: "/portfolio/auto360/cover.png",
    href: "https://play.google.com/store/apps/details?id=com.expohub&pli=1",
  },
  {
    name: "Sophtron",
    category: "Web & Mobile · Front-End",
    year: "2022",
    description:
      "A widget which wraps multiple payment providers data aggregation in a single web app",
    stack: "React, React Native",
    accent: "#1a1a1a",
    cover: "/portfolio/sophtron/cover.png",
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
    cover: "/portfolio/yooniez/cover.png",
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
    cover: "/portfolio/vessel/cover.png",
    href: "https://www.openvessel.io/",
  },
  {
    name: "Simple Duck Studios",
    category: "Web App · Full-Stack",
    year: "2022",
    description: "A playable & interactive landing page for creative agency",
    stack: "React + NextJS",
    accent: "#dfdfdf",
    cover: "/portfolio/simple-duck-studios/cover.png",
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
    cover: "/portfolio/diamond-hands/cover.png",
    href: "https://diamond-hands-eight.vercel.app/",
  },
  {
    name: "Dasbor Ukur Layanan KUA",
    category: "Mobile App · Full-Stack",
    year: "2021",
    description: "A brand new public service mobile app from KEMENAG RI",
    stack: "React Native, PHP, MySQL",
    accent: "#1a1a1a",
    cover: "/portfolio/dulk/cover.png",
  },
  {
    name: "TVRI Klik",
    category: "Mobile App · Full-Stack",
    year: "2021",
    description:
      "A rebranded TV live streaming service & TV On-demand mobile app from TVRI",
    stack: "React Native, PHP, MySQL",
    accent: "#444444",
    cover: "/portfolio/tvri/cover.png",
    href: "https://play.google.com/store/apps/details?id=id.go.tvri.klik",
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
