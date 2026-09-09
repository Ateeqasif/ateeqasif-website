type ContactEmailFields = {
  name: string;
  email: string;
  organization?: string;
  reason: string;
  message: string;
  domain: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eef0f4;font-size:13px;font-weight:600;color:#6b7280;width:140px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #eef0f4;font-size:15px;color:#111827;vertical-align:top;">
        ${value}
      </td>
    </tr>`;
}

export function contactEmailHtml({
  name,
  email,
  organization,
  reason,
  message,
  domain,
}: ContactEmailFields): string {
  const messageHtml = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
            <tr>
              <td style="background:linear-gradient(135deg,#38bdf8,#8b5cf6);padding:28px 32px;">
                <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:rgba(255,255,255,0.85);">
                  New Contact Form Submission
                </p>
                <p style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;">
                  ${escapeHtml(domain)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", escapeHtml(name))}
                  ${row(
                    "Email",
                    `<a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(email)}</a>`,
                  )}
                  ${row("Organization", organization ? escapeHtml(organization) : "Not provided")}
                  ${row("Reason", escapeHtml(reason))}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 28px;">
                <p style="margin:20px 0 8px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;">
                  Message
                </p>
                <div style="background-color:#f8f9fb;border:1px solid #eef0f4;border-radius:10px;padding:16px 18px;font-size:15px;line-height:1.6;color:#111827;">
                  ${messageHtml}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px;background-color:#f8f9fb;border-top:1px solid #eef0f4;">
                <p style="margin:0;font-size:12px;color:#9ca3af;">
                  Sent from the contact form on
                  <a href="https://${escapeHtml(domain)}" style="color:#6b7280;">${escapeHtml(domain)}</a>.
                  Reply to this email to respond directly to ${escapeHtml(name)}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
