import { PROFILE, SOCIALS } from "@/data/profile";

export function ProfileCard() {
  return (
    <aside className="relative">
      <DashedDecorations />

      <div className="relative z-10 flex flex-col gap-5 rounded-[28px] border border-ink-200 bg-white p-5 text-ink-900 shadow-[0_25px_50px_-20px_rgba(15,14,12,0.18)]">
        <Portrait />

        <div className="text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">
            {PROFILE.name}
          </h2>
          <div
            aria-hidden
            className="mx-auto mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink-950 text-white"
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

function Portrait() {
  return (
    <div
      className="avatar relative mx-auto aspect-square w-full max-w-[260px] rounded-full"
      data-type="wave"
    >
      <div
        className="image animate-morph absolute inset-0 bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)]"
        style={{
          backgroundImage: `url('/avatar.jpg')`,
          backgroundBlendMode: "multiply",
        }}
        role="img"
        aria-label={PROFILE.name}
      />
    </div>
  );
}

function DashedDecorations() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 500"
      className="pointer-events-none absolute -inset-10 z-0 h-[calc(100%+80px)] w-[calc(100%+80px)] text-ink-300/60"
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
