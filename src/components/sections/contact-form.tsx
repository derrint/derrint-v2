"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { useState, type FormEvent, type ReactNode } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqvnkvz";

const SUBJECT_OPTIONS = [
  { value: "", label: "Select…" },
  { value: "Freelance Project", label: "Freelance Project" },
  { value: "Full-time Opportunity", label: "Full-time Opportunity" },
  { value: "Collaboration", label: "Collaboration" },
  { value: "Just Saying Hi", label: "Just Saying Hi" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("sent");
        window.setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="pb-20 sm:pb-24 lg:pb-28">
      <SectionHeading line1="Let's Work" line2="Together" />

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="input-base"
          />
        </Field>

        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="input-base"
          />
        </Field>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="subject" className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-ink-700">
              Subject
            </span>
            <select
              id="subject"
              name="subject"
              defaultValue=""
              required
              className="input-base"
            >
              {SUBJECT_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.value === ""}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
          <p className="text-xs text-ink-500">
            Pick a topic so replies stay organized—including casual notes (“Just
            Saying Hi”) is intentional: you don’t need a pitch to reach out.
          </p>
        </div>

        <Field label="Message" htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Your message…"
            className="input-base resize-none"
          />
        </Field>

        {status === "error" ? (
          <p className="sm:col-span-2 text-sm text-red-600" role="alert">
            Something went wrong. Please try again in a moment.
          </p>
        ) : null}

        <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
          <p className="text-xs text-ink-500">
            By submitting you agree to be contacted about your request.
          </p>
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sent"
              ? "Sent ✓"
              : status === "sending"
                ? "Sending…"
                : "Submit"}
          </button>
        </div>
      </form>

      <style jsx>{`
        :global(.input-base) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgb(235 235 235);
          background-color: #ffffff;
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
          color: rgb(0 0 0);
          outline: none;
          transition:
            border-color 150ms ease,
            box-shadow 150ms ease;
        }
        :global(.input-base:focus) {
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
        }
        :global(.input-base::placeholder) {
          color: rgb(153 153 153);
        }
      `}</style>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={`flex flex-col gap-2 ${className}`}>
      <span className="text-xs font-medium uppercase tracking-wider text-ink-700">
        {label}
      </span>
      {children}
    </label>
  );
}

export default ContactForm;
