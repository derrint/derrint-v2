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
      className={`flex w-full flex-col gap-10 pt-20 sm:pt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:max-w-none lg:pt-28 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
