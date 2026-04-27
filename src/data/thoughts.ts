export type Thought = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  accent: string;
  href?: string;
};

export const THOUGHTS: readonly Thought[] = [
  {
    title: "Starting and Growing a Career in Web Design",
    excerpt:
      "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    readTime: "6 min read",
    accent: "#f2c18b",
    href: "#",
  },
  {
    title: "Create a Landing Page That Performs Great",
    excerpt:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page — they help you increase your revenue.",
    date: "Mar 15, 2022",
    readTime: "6 min read",
    accent: "#b6a7ff",
    href: "#",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    excerpt:
      "Standalone websites used to generate leads or sales are changing fast. Here's how product designers can stay ahead of the curve in the coming years.",
    date: "Feb 28, 2022",
    readTime: "6 min read",
    accent: "#9be3c7",
    href: "#",
  },
];
