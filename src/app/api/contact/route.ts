import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { siteSettings } from "@/content/site";

export const runtime = "nodejs";

/**
 * In-memory fixed-window rate limiter. Sufficient for a single-instance
 * deployment (e.g. Vercel with a long-lived Node runtime); resets on
 * redeploy/cold start. For multi-instance production traffic, replace with
 * a shared store (Upstash Redis, Vercel KV) — see README.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const hits = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(key, { count: 1, windowStart: now });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please correct the highlighted fields.", errors: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Honeypot triggered: report success without sending, so bots don't learn.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, organization, reason, goal, timeline } = parsed.data;

  const emailBody = [
    `New enquiry from ${siteSettings.domain}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "—"}`,
    `Reason: ${reason}`,
    `Timeline: ${timeline || "—"}`,
    "",
    "What they're trying to achieve:",
    goal,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL || siteSettings.email;
  const fromAddress = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromAddress) {
    // Development fallback: log instead of pretending mail was sent.
    console.warn(
      "[contact] RESEND_API_KEY or CONTACT_FROM_EMAIL not configured — logging enquiry instead of sending email.\n" +
        emailBody
    );
    return NextResponse.json({ ok: true, delivery: "logged" });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New enquiry: ${reason} — ${name}`,
      text: emailBody,
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json(
        { ok: false, message: "Something went wrong while sending your enquiry." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivery: "sent" });
  } catch (error) {
    console.error("[contact] unexpected error", error);
    return NextResponse.json(
      { ok: false, message: "Something went wrong while sending your enquiry." },
      { status: 500 }
    );
  }
}
