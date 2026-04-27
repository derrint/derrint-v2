import type { Thought } from "@/data/thoughts";

export function ThoughtCard({
  title,
  excerpt,
  date,
  readTime,
  accent,
  href = "#",
}: Thought) {
  return (
    <article className="card-surface group flex h-full flex-col gap-5 overflow-hidden p-5">
      <div
        className="relative h-44 w-full overflow-hidden rounded-2xl"
        style={{ backgroundColor: accent }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_10%,rgba(255,255,255,0.35),transparent_55%)]" />
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
          Article
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-3 text-xs text-ink-500">
          <time>{date}</time>
          <span className="h-1 w-1 rounded-full bg-ink-300" />
          <span>{readTime}</span>
        </div>
        <h3 className="font-display text-xl font-semibold leading-snug text-ink-950 transition-colors group-hover:text-[#ff6b2c]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-600 line-clamp-3">
          {excerpt}
        </p>
      </div>

      <a
        href={href}
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-ink-950 transition-colors hover:text-[#ff6b2c]"
      >
        Read article
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

export default ThoughtCard;
