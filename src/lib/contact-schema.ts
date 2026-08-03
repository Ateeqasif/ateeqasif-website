import { z } from "zod";

export const contactReasons = [
  "Strategy/Advisory",
  "Partnership",
  "Speaking",
  "Media",
  "Other",
] as const;

export const contactTimelines = ["Immediate", "1–3 months", "3–6 months", "Exploring"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your full name."),
  email: z.string().trim().email("Enter a valid work email address."),
  organization: z.string().trim().optional(),
  reason: z.enum(contactReasons, {
    message: "Select a reason for contacting.",
  }),
  goal: z
    .string()
    .trim()
    .min(30, "Add a little more detail (at least 30 characters)."),
  timeline: z.enum(contactTimelines).optional(),
  consent: z.literal(true, {
    message: "Consent is required to send your enquiry.",
  }),
  // Honeypot: real visitors never fill this in.
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
