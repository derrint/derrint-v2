"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import type { IconType } from "react-icons";
import {
  FiCalendar,
  FiCode,
  FiExternalLink,
  FiLayers,
  FiSmartphone,
  FiX,
} from "react-icons/fi";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project;
  layoutIdBase: string;
  onClose: () => void;
};

function splitCategory(category: string): { platform: string; role: string } {
  const parts = category
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length >= 2) {
    return { platform: parts[0]!, role: parts[1]! };
  }
  return { platform: category, role: "—" };
}

export function ProjectModal({
  project,
  layoutIdBase,
  onClose,
}: ProjectModalProps) {
  const { platform, role } = splitCategory(project.category);
  const hasLink = Boolean(project.href && project.href !== "#");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
      initial={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      exit={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <motion.article
        className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-[0_40px_100px_-40px_rgba(0,0,0,0.45)] lg:max-h-[85vh] lg:flex-row"
        onClick={(event) => event.stopPropagation()}
        layoutId={`${layoutIdBase}-card`}
        initial={{ filter: "blur(4px)" }}
        animate={{ filter: "blur(0px)" }}
        exit={{ filter: "blur(3px)" }}
        transition={{ type: "spring", stiffness: 420, damping: 38 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white/95 text-ink-700 shadow-sm transition-colors hover:bg-ink-50 hover:text-ink-950 cursor-pointer"
          aria-label="Close project details"
        >
          <FiX className="h-4 w-4" />
        </button>

        <div className="relative flex min-h-[250px] flex-1 flex-col justify-center sm:min-h-[350px] lg:min-h-0 lg:max-w-[63%]">
          <Image
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-6 sm:p-8 lg:max-w-[37%]">
          <div>
            <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-3xl">
              {project.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
              {project.description}
            </p>
          </div>

          <dl className="flex flex-col gap-4 text-sm">
            <DetailRow icon={FiCode} label="Role" value={role} />
            <DetailRow icon={FiSmartphone} label="Platform" value={platform} />
            <DetailRow icon={FiLayers} label="Stack" value={project.stack} />
            <DetailRow
              icon={FiCalendar}
              label="Timeline"
              value={project.year}
            />
            {hasLink ? (
              <div className="flex gap-3 border-t border-ink-100 pt-4">
                <span className="mt-0.5 shrink-0 text-ink-400">
                  <FiExternalLink className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="sr-only">Link</dt>
                  <dd className="min-w-0">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all text-ink-700 underline decoration-ink-300 underline-offset-4 transition-colors hover:text-ink-950"
                    >
                      {project.href}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}
          </dl>
        </div>
      </motion.article>
    </motion.div>
  );
}

type DetailRowProps = {
  icon: IconType;
  label: string;
  value: string;
};

function DetailRow({ icon: Icon, label, value }: DetailRowProps) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-ink-400" aria-hidden>
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">
          {label}
        </dt>
        <dd className="mt-0.5 text-ink-800">{value}</dd>
      </div>
    </div>
  );
}
