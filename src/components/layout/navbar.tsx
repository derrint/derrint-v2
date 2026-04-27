import { NAV_ITEMS } from "@/data/nav";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="flex items-center gap-1 rounded-full border border-ink-200 bg-white/80 p-1.5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] backdrop-blur-xl"
      >
        {NAV_ITEMS.map(({ label, href, Icon }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            title={label}
            className="group flex h-9 w-9 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
