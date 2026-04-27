import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: Partial<IconProps> = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};


export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}


export function LayersIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m12 3 9 5-9 5-9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}

export function DribbbleIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 3.5c3 4 5 8.5 6 15" />
      <path d="M21 11c-6 0-12 1-17 5" />
      <path d="M3.5 8.5c5 0 11-.5 15-5" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 4 20 20" />
      <path d="M20 4 4 20" />
      <path d="M5 4h4l10 16h-4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3" />
      <path d="m10.5 9.5 5 2.5-5 2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
