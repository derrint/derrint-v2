import { PlayIcon } from "@/components/icons";
import { PROFILE, SOCIALS } from "@/data/profile";

export function ProfileCard() {
  return (
    <aside className="relative">
      <DashedDecorations />

      <div className="relative z-10 flex flex-col gap-5 rounded-[28px] border border-ink-200 bg-white p-5 text-ink-900 shadow-[0_25px_50px_-20px_rgba(15,14,12,0.18)]">
        <PortraitPlaceholder />

        <div className="text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">
            {PROFILE.name}
          </h2>
          <div
            aria-hidden
            className="mx-auto mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff6b2c] text-white"
          >
            <span className="text-sm font-bold">✦</span>
          </div>
          <p className="mx-auto mt-4 max-w-[22ch] text-sm leading-relaxed text-ink-500">
            {PROFILE.bio}
          </p>
        </div>

        <ul className="flex items-center justify-center gap-4 text-ink-500">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-ink-100 hover:text-ink-900"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#e7552a]">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_20%,rgba(255,180,120,0.55),transparent_55%)]" />
      <svg
        viewBox="0 0 200 250"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="silhouette" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1208" />
            <stop offset="100%" stopColor="#0a0603" />
          </linearGradient>
        </defs>
        <path
          d="M100 60c18 0 32 15 32 34 0 12-5 22-12 28 18 8 30 23 34 48 1 7 1 20 1 30H45c0-10 0-23 1-30 4-25 16-40 34-48-7-6-12-16-12-28 0-19 14-34 32-34Z"
          fill="url(#silhouette)"
        />
      </svg>
    </div>
  );
}

function DashedDecorations() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 500"
      className="pointer-events-none absolute -inset-10 z-0 h-[calc(100%+80px)] w-[calc(100%+80px)] text-[#ff6b2c]/50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeDasharray="4 6"
    >
      <path d="M40 80 Q 10 200 80 320" />
      <path d="M360 60 Q 420 180 340 300" />
      <path d="M60 430 Q 200 480 340 430" />
    </svg>
  );
}

export default ProfileCard;
