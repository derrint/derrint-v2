export type Tool = {
  name: string;
  description: string;
  initial: string;
  color: string;
  textColor?: string;
};

export const TOOLS: readonly Tool[] = [
  {
    name: "Framer",
    description: "Website Builder",
    initial: "F",
    color: "#0055ff",
  },
  {
    name: "Figma",
    description: "Design Tool",
    initial: "Fi",
    color: "#ff7262",
  },
  {
    name: "Lemon Squeezy",
    description: "Payments Provider",
    initial: "L",
    color: "#ffdc5a",
    textColor: "#1a1400",
  },
  {
    name: "ChatGPT",
    description: "AI Assistant",
    initial: "C",
    color: "#10a37f",
  },
  {
    name: "Notion",
    description: "Productivity Tool",
    initial: "N",
    color: "#f2f0ea",
    textColor: "#111",
  },
  {
    name: "Next.js",
    description: "React Framework",
    initial: "Nx",
    color: "#111111",
  },
];
