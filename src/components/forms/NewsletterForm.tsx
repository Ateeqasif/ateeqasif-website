"use client";

import { useId, useState, type FormEvent } from "react";
import { ctaCopy } from "@/content/site";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const id = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company_website: honeypot }),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="text-sm font-medium text-fg">
        You&rsquo;re subscribed. New perspectives will arrive only when there is something worth
        sharing.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        id={id}
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-fg placeholder:text-fg-tertiary focus:border-accent-a focus:outline-none sm:max-w-xs"
      />
      <div aria-hidden="true" className="hidden">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-fg px-6 py-3 text-sm font-semibold text-bg transition-all hover:shadow-[0_0_30px_-6px_var(--color-accent-a)] disabled:opacity-60"
      >
        {ctaCopy.subscription}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-400 sm:self-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
