"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { useState, type FormEvent, type ReactNode } from "react";

const BUDGET_OPTIONS = [
  { value: "", label: "Select…" },
  { value: "under-3k", label: "< $3k" },
  { value: "3k-5k", label: "$3k – $5k" },
  { value: "5k-10k", label: "$5k – $10k" },
  { value: "over-10k", label: "> $10k" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    // Placeholder — wire up to an API route / Resend / Formspree in production.
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <Section id="contact">
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

        <Field label="Budget" htmlFor="budget" className="sm:col-span-2">
          <select id="budget" name="budget" defaultValue="" className="input-base">
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Tell me about your project…"
            className="input-base resize-none"
          />
        </Field>

        <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
          <p className="text-xs text-ink-500">
            By submitting you agree to be contacted about your request.
          </p>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-[#ff6b2c] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
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
          border: 1px solid rgb(201 199 193);
          background-color: #ffffff;
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
          color: rgb(15 14 12);
          outline: none;
          transition:
            border-color 150ms ease,
            box-shadow 150ms ease;
        }
        :global(.input-base:focus) {
          border-color: #ff6b2c;
          box-shadow: 0 0 0 3px rgba(255, 107, 44, 0.15);
        }
        :global(.input-base::placeholder) {
          color: rgb(168 165 156);
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
