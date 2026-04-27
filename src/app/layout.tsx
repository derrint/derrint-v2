import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorensio Derrint — Software Engineer",
  description:
    "Portfolio of Lorensio Derrint — a software engineer crafting intuitive, engaging products with 12+ years of experience.",
  metadataBase: new URL("https://sawad.example.com"),
  openGraph: {
    title: "Lorensio Derrint — Software Engineer",
    description:
      "Passionate about transforming ideas into beautifully crafted products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-ink-50 font-sans text-ink-900">
        {children}
      </body>
    </html>
  );
}
