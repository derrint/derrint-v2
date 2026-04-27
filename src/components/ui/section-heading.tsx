type SectionHeadingProps = {
  line1: string;
  line2: string;
  eyebrow?: string;
  id?: string;
  className?: string;
};

export function SectionHeading({
  line1,
  line2,
  eyebrow,
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <header id={id} className={`flex flex-col gap-3 ${className}`}>
      {eyebrow ? (
        <span className="pill">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="heading-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-ink-950">
        <span className="block">{line1}</span>
        <span className="text-outline block">{line2}</span>
      </h2>
    </header>
  );
}

export default SectionHeading;
