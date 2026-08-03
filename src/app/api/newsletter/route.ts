import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().trim().email(),
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Enter a valid email address." },
      { status: 422 }
    );
  }

  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  // No email-service provider is wired up yet. Log instead of pretending the
  // subscription is live — see README "Newsletter setup" before launch.
  console.warn(`[newsletter] subscribe request for ${parsed.data.email} (not yet connected to an ESP)`);

  return NextResponse.json({ ok: true });
}
