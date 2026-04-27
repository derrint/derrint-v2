import { FOOTER_SOCIALS, PROFILE } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 py-10">
      <div className="container-site flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-sm text-ink-500">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-950 text-white"
          >
            <span className="font-bold">s.</span>
          </span>
          <span>
            Made by{" "}
            <a href="#" className="text-ink-950 hover:text-ink-700">
              Templyo
            </a>{" "}
            · Inspired by{" "}
            <a
              href="https://sawad.framer.website/"
              rel="noreferrer"
              className="text-ink-950 hover:text-ink-700"
            >
              Sawad
            </a>
          </span>
        </div>

        <ul className="flex flex-wrap items-center gap-4 text-sm">
          {FOOTER_SOCIALS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-ink-600 transition-colors hover:text-ink-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
