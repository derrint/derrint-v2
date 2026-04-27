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

export function HomeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function ToolIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m14.7 6.3 3 3-9.6 9.6a2 2 0 0 1-2.8 0l-.2-.2a2 2 0 0 1 0-2.8Z" />
      <path d="m13 8 3 3" />
      <path d="M17 3c1.6 0 3 1.4 3 3 0 1-.4 1.9-1.1 2.5L16 11l-3-3 2.5-2.9A3.4 3.4 0 0 1 17 3Z" />
    </svg>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="m14 7 3 3" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props} fill="currentColor" stroke="none">
      <path d="M8 5.5v13l11-6.5Z" />
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
