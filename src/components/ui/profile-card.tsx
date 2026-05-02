import { PROFILE, SOCIALS } from "@/data/profile";
import { FiMail, FiMapPin } from "react-icons/fi";

export function ProfileCard() {
  return (
    <aside className="relative">
      <div className="relative z-10 flex flex-col gap-8 rounded-[28px] border border-ink-200 bg-white p-5 text-ink-900 shadow-[0_25px_50px_-20px_rgba(15,14,12,0.18)] max-w-lg mx-auto">
        <Portrait />

        <div className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-3xl font-bold tracking-tight text-ink-900">
            {PROFILE.name}
          </h2>
          {/* <div
            aria-hidden
            className="mx-auto mt-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink-950 text-white"
          >
            <span className="text-sm font-bold">✦</span>
          </div> */}
          <p className="mx-auto mt-5 max-w-sm text-md leading-relaxed text-ink-500">
            {PROFILE.bio}
          </p>

          <ul className="mx-auto mt-7 flex w-full max-w-sm flex-col text-left gap-2">
            <li className="flex items-center justify-center gap-2">
              <span
                className="flex items-center justify-center text-ink-800"
                aria-hidden
              >
                <FiMapPin className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="min-w-0 text-sm leading-snug text-ink-800">
                {PROFILE.location}
              </span>
            </li>
            <li className="flex items-center justify-center gap-2.5">
              <span
                className="flex items-center justify-center text-ink-800"
                aria-hidden
              >
                <FiMail className="h-4 w-4" strokeWidth={2} />
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="min-w-0 break-all text-sm font-medium text-ink-600 underline-offset-2 transition-colors hover:text-ink-700 hover:underline"
              >
                {PROFILE.email}
              </a>
            </li>
          </ul>

          <ul className="mt-7 flex items-center justify-center gap-4 text-ink-500">
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

export default ProfileCard;
