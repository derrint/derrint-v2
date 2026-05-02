import { FOOTER_SOCIALS, PROFILE } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 py-10">
      <div className="container-site flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
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

        <p className="text-sm text-ink-500">
          &copy; {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
