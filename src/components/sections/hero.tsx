import { StatCard } from "@/components/ui/stat-card";
import { TagCard } from "@/components/ui/tag-card";
import { HERO_TAGS, STATS } from "@/data/hero";
import { PROFILE } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative isolate flex flex-col gap-10 items-center lg:items-start">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-ink-300/30 blur-3xl" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <Headline />

      <p className="text-sm max-w-lg leading-relaxed text-ink-600 sm:text-base text-center lg:text-left">
        {PROFILE.description}
      </p>

      <dl className="flex w-fit gap-2 sm:gap-4 lg:gap-8">
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
    <h1 className="heading-display text-[clamp(3rem,10vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight text-ink-950 text-center lg:text-left">
      <span className="block">Software</span>
      <span className="text-outline block">Engineer</span>
    </h1>
  );
}

export default Hero;
