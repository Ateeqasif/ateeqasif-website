import { z } from "zod";

export const contactReasons = [
  "Partnership",
  "Investment",
  "Business Advisory",
  "Media",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  organization: z.string().trim().optional(),
  reason: z.enum(contactReasons, {
    message: "Select a reason for contacting.",
  }),
  message: z
    .string()
    .trim()
    .min(30, "Add a little more detail (at least 30 characters)."),
  consent: z.literal(true, {
    message: "Consent is required to send your message.",
  }),
  // Honeypot: real visitors never fill this in.
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
