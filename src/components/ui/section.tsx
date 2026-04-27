import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Mirrors the hero's 2-column grid so all downstream sections visually
 * align with the right column while the left gutter stays empty.
 */
export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-16">
          <div aria-hidden className="hidden lg:block" />
          <div className="flex flex-col gap-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Section;
