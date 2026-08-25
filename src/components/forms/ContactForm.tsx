"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { contactReasons, contactSchema, contactTimelines } from "@/lib/contact-schema";
import { siteSettings } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  organization: "",
  reason: "",
  goal: "",
  timeline: "",
  consent: false,
  company_website: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const formId = useId();

  // Static export (Hostinger shared hosting via CI, see
  // .github/workflows/deploy-hostinger.yml) has no server to receive a
  // POST, so that build opens the visitor's email client with the
  // enquiry pre-filled instead of calling /api/contact. The normal
  // dynamic build (Vercel, Node.js hosting, local dev) posts to the real
  // endpoint. NEXT_PUBLIC_STATIC_EXPORT is inlined at build time, so each
  // build ships only the code path it needs.
  const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage(null);

    const parsed = contactSchema.safeParse({
      ...values,
      organization: values.organization || undefined,
      reason: values.reason || undefined,
      timeline: values.timeline || undefined,
      consent: values.consent === true,
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    if (isStaticExport) {
      const { name, email, organization, reason, goal, timeline } = parsed.data;
      const subject = `New enquiry: ${reason} — ${name}`;
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "—"}`,
        `Reason: ${reason}`,
        `Timeline: ${timeline || "—"}`,
        "",
        "What I'm trying to achieve:",
        goal,
      ].join("\n");

      window.location.href = `mailto:${siteSettings.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setStatus("success");
      setValues(initialValues);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus("error");
        setServerMessage(
          result.message ||
            `Something went wrong while sending your enquiry. Please try again or email ${siteSettings.email}.`
        );
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage(
        `Something went wrong while sending your enquiry. Please try again or email ${siteSettings.email}.`
      );
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="glass gradient-border rounded-2xl p-8 text-fg">
        <p className="text-lg font-semibold">{isStaticExport ? "Almost there." : "Thank you."}</p>
        <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
          {isStaticExport
            ? `Your email app should have opened with your enquiry pre-filled — review it and hit send to complete it. If nothing opened, email ${siteSettings.email} directly.`
            : "Your enquiry has been received. If the opportunity is a good fit, my team or I will respond within two business days."}
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && serverMessage && (
        <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
          {serverMessage}
        </div>
      )}

      <Field
        id={`${formId}-name`}
        label="Full name"
        required
        error={errors.name}
      >
        <input
          id={`${formId}-name`}
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
          className={inputClass(Boolean(errors.name))}
        />
      </Field>

      <Field id={`${formId}-email`} label="Work email" required error={errors.email}>
        <input
          id={`${formId}-email`}
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={Boolean(errors.email)}
          className={inputClass(Boolean(errors.email))}
        />
      </Field>

      <Field id={`${formId}-organization`} label="Organization" error={errors.organization}>
        <input
          id={`${formId}-organization`}
          type="text"
          autoComplete="organization"
          value={values.organization}
          onChange={(e) => setValues((v) => ({ ...v, organization: e.target.value }))}
          className={inputClass(false)}
        />
      </Field>

      <Field
        id={`${formId}-reason`}
        label="Reason for contacting"
        required
        error={errors.reason}
      >
        <select
          id={`${formId}-reason`}
          value={values.reason}
          onChange={(e) => setValues((v) => ({ ...v, reason: e.target.value }))}
          aria-invalid={Boolean(errors.reason)}
          className={inputClass(Boolean(errors.reason))}
        >
          <option value="" disabled className="bg-surface text-fg">
            Select a reason
          </option>
          {contactReasons.map((reason) => (
            <option key={reason} value={reason} className="bg-surface text-fg">
              {reason}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id={`${formId}-goal`}
        label="What are you trying to achieve?"
        required
        error={errors.goal}
        hint="Minimum 30 characters."
      >
        <textarea
          id={`${formId}-goal`}
          rows={5}
          value={values.goal}
          onChange={(e) => setValues((v) => ({ ...v, goal: e.target.value }))}
          aria-invalid={Boolean(errors.goal)}
          className={inputClass(Boolean(errors.goal))}
        />
      </Field>

      <Field id={`${formId}-timeline`} label="Timeline" error={errors.timeline}>
        <select
          id={`${formId}-timeline`}
          value={values.timeline}
          onChange={(e) => setValues((v) => ({ ...v, timeline: e.target.value }))}
          className={inputClass(false)}
        >
          <option value="" className="bg-surface text-fg">
            Select a timeline
          </option>
          {contactTimelines.map((timeline) => (
            <option key={timeline} value={timeline} className="bg-surface text-fg">
              {timeline}
            </option>
          ))}
        </select>
      </Field>

      {/* Honeypot: hidden from sighted users and skipped by keyboard/AT via aria-hidden + tabIndex. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${formId}-company_website`}>Leave this field empty</label>
        <input
          id={`${formId}-company_website`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company_website}
          onChange={(e) => setValues((v) => ({ ...v, company_website: e.target.value }))}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-fg-secondary">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
            aria-invalid={Boolean(errors.consent)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5"
          />
          <span>
            I agree to the{" "}
            <Link href="/privacy" className="font-medium text-accent-a underline underline-offset-2">
              privacy notice
            </Link>
            .
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-sm text-red-400">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-bg transition-all hover:shadow-[0_0_40px_-8px_var(--color-accent-a)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-fg placeholder:text-fg-tertiary shadow-sm focus:border-accent-a focus:outline-none ${
    hasError ? "border-red-500/50" : "border-white/10"
  }`;
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-fg">
        {label} {required && <span aria-hidden="true" className="text-accent-a">*</span>}
      </label>
      {hint && <p className="mt-1 text-xs text-fg-tertiary">{hint}</p>}
      <div className="mt-2">{children}</div>
      {error && (
        <p className="mt-1.5 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
