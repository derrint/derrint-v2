/**
 * Hash target for `#home`: top of page content (before profile + hero grid).
 * Keeps nav as plain `<a href="#home">` without client-side scroll hacks.
 */
export function HomeAnchor() {
  return (
    <div
      id="home"
      className="pointer-events-none h-px w-full shrink-0 pt-24 lg:pt-36"
      aria-hidden
    />
  );
}
