export interface ContactEmailData {
    name: string;
    email: string;
    company?: string;
    service: string;
    message: string;
}

const SERVICE_LABELS: Record<string, string> = {
    web: "Développement Web",
    mobile: "Développement Mobile",
    design: "UI/UX Design",
    other: "Autre",
};

/**
 * Builds the HTML body for the "new contact submission" email sent to
 * the Khawa Tech team. Kept as a plain string (inline styles only) since
 * most email clients strip <style> tags and ignore Tailwind classes.
 *
 * This function only builds the markup — it does not send anything.
 */
export function ContactEmailTemplate(data: ContactEmailData): string {
    const serviceLabel = SERVICE_LABELS[data.service] ?? data.service;

    return `
  <!DOCTYPE html>
  <html lang="fr">
    <body style="margin:0; padding:0; background-color:#0B0D12; font-family:Arial, Helvetica, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0D12; padding:32px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#12141B; border-radius:12px; border:1px solid rgba(255,255,255,0.08); overflow:hidden;">

              <!-- Header -->
              <tr>
                <td style="padding:28px 32px; background-color:#0F49E1;">
                  <span style="font-size:18px; font-weight:bold; color:#ffffff;">Khawa Tech</span>
                  <p style="margin:4px 0 0; font-size:13px; color:rgba(255,255,255,0.8);">
                    Nouvelle demande de contact
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:32px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom:16px;">
                        <span style="font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:#8A8F9C;">Nom</span>
                        <p style="margin:4px 0 0; font-size:15px; color:#ffffff;">${data.name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom:16px;">
                        <span style="font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:#8A8F9C;">Email</span>
                        <p style="margin:4px 0 0; font-size:15px;">
                          <a href="mailto:${data.email}" style="color:#4F7DF9; text-decoration:none;">${data.email}</a>
                        </p>
                      </td>
                    </tr>
                    ${data.company
            ? `<tr>
                            <td style="padding-bottom:16px;">
                              <span style="font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:#8A8F9C;">Entreprise</span>
                              <p style="margin:4px 0 0; font-size:15px; color:#ffffff;">${data.company}</p>
                            </td>
                          </tr>`
            : ""
        }
                    <tr>
                      <td style="padding-bottom:20px;">
                        <span style="font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:#8A8F9C;">Service demandé</span>
                        <p style="margin:4px 0 0;">
                          <span style="display:inline-block; padding:4px 10px; border-radius:999px; background-color:rgba(15,73,225,0.15); color:#4F7DF9; font-size:13px; font-weight:600;">
                            ${serviceLabel}
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style="font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:#8A8F9C;">Message</span>
                        <p style="margin:8px 0 0; font-size:14px; line-height:1.6; color:#D2D4DA; white-space:pre-wrap;">${data.message}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:20px 32px; background-color:#0D0F15; border-top:1px solid rgba(255,255,255,0.06);">
                  <p style="margin:0; font-size:12px; color:#6B707D;">
                    Reçu via le formulaire de contact sur khawa-tech.com
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}