import Image from "next/image";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { BLUR_DATA_URL } from "@/lib/image-placeholder";

type ProjectCardProps = Project & {
  onOpen: () => void;
  layoutIdBase: string;
};

export function ProjectCard({
  name,
  description,
  accent,
  thumbnail,
  onOpen,
  layoutIdBase,
}: ProjectCardProps) {
  return (
    <li>
      <motion.button
        type="button"
        onClick={onOpen}
        className="group flex w-full cursor-pointer items-center gap-5 border-b border-ink-200 py-5 text-left transition-colors hover:border-ink-400"
        layoutId={`${layoutIdBase}-card`}
      >
        {thumbnail ? (
          <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-ink-200">
            <Image
              src={thumbnail}
              alt={name}
              fill
              sizes="80px"
              className="object-cover"
              quality={65}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        ) : (
          <ProjectThumbnail color={accent} />
        )}

        <div className="min-w-0 flex-1">
          <p className="font-display text-lg font-semibold text-ink-950">
            {name}
          </p>
          <p className="text-sm text-ink-500">{description}</p>
        </div>

        <span
          aria-hidden
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-500 transition-all group-hover:bg-ink-950 group-hover:text-white"
        >
          <FiArrowUpRight className="h-4 w-4" />
        </span>
      </motion.button>
    </li>
  );
}

function ProjectThumbnail({ color }: { color: string }) {
  return (
    <div
      className="relative flex h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-ink-200"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="absolute inset-x-2 top-2 h-2 rounded-full bg-white/30" />
      <div className="absolute inset-x-2 bottom-2 h-1 rounded-full bg-white/20" />
    </div>
  );
}

export default ProjectCard;
