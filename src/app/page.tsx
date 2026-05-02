import { Footer } from "@/components/layout/footer";
import { HomeAnchor } from "@/components/layout/home-anchor";
import { Navbar } from "@/components/layout/navbar";
import { ContactForm } from "@/components/sections/contact-form";
import { BehindTheWork } from "@/components/sections/behind-the-work";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { RecentProjects } from "@/components/sections/recent-projects";
import { ProfileCard } from "@/components/ui/profile-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container-site">
        <HomeAnchor />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-6 lg:self-start">
            <ProfileCard />
          </div>
          <div className="min-w-0">
            <Hero />
            <RecentProjects />
            <Experience />
            <TechStack />
            <BehindTheWork />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
