import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactForm } from "@/components/sections/contact-form";
import { DesignThoughts } from "@/components/sections/design-thoughts";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { PremiumTools } from "@/components/sections/premium-tools";
import { RecentProjects } from "@/components/sections/recent-projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RecentProjects />
        <Experience />
        <PremiumTools />
        <DesignThoughts />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
