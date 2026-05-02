import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Sections render inside the page-level 2-column grid, so each one only
 * needs to provide its own vertical rhythm and inner content stack.
 */
export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col gap-10 pt-24 lg:pt-28 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
