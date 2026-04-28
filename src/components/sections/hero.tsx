import { StatCard } from "@/components/ui/stat-card";
import { TagCard } from "@/components/ui/tag-card";
import { HERO_TAGS, STATS } from "@/data/hero";
import { PROFILE } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex flex-col gap-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-ink-300/30 blur-3xl" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <Headline />

      <p className="text-sm leading-relaxed text-ink-600 sm:text-base">
        {PROFILE.description}
      </p>

      <dl className="grid grid-cols-3 gap-6 sm:gap-10">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </dl>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {HERO_TAGS.map((tag) => (
          <TagCard key={tag.title} {...tag} />
        ))}
      </div>
    </section>
  );
}

function Headline() {
  return (
    <h1 className="heading-display text-[clamp(3rem,10vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight text-ink-950">
      <span className="block">Software</span>
      <span className="text-outline block">Engineer</span>
    </h1>
  );
}

export default Hero;
