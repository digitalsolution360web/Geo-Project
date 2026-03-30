import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_MESSAGE = 8000;
const MAX_FIELD = 500;

function getMailConfig() {
  const user =
    process.env.EMAIL_USER?.trim() ||
    process.env.EMAIL_UESER?.trim() ||
    process.env.GMAIL_USER?.trim();
  const passRaw =
    process.env.EMAIL_PASS ||
    process.env.EMAIL_PASSWORD ||
    process.env.GMAIL_APP_PASSWORD;
  if (!user || !passRaw?.trim()) {
    return null;
  }
  const pass = passRaw.replace(/\s/g, "");
  return { user, pass };
}

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, MAX_FIELD);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const config = getMailConfig();
  if (!config) {
    const hint =
      process.env.NODE_ENV === "development"
        ? " Add EMAIL_USER and EMAIL_PASS in my-app/.env.local (restart dev server after saving)."
        : "";
    return NextResponse.json(
      { error: `Email is not configured on the server.${hint}` },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email).toLowerCase();
  const organisation = sanitize(body.organisation);
  const country = sanitize(body.country);
  const subject = sanitize(body.subject);
  const message =
    typeof body.message === "string"
      ? body.message.trim().slice(0, MAX_MESSAGE)
      : "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill in name, email, subject, and project details." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const safeSubject = subject.replace(/[\r\n]/g, " ").slice(0, 200);
  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#0f172a;max-width:560px;">
      <p style="margin:0 0 16px;font-size:12px;text-transform:uppercase;letter-spacing:0.12em;color:#16a34a;font-weight:700;">New enquiry — GeoDecision website</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;color:#64748b;width:120px;">Name</td><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;font-weight:600;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;color:#64748b;">Email</td><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;color:#64748b;">Organisation</td><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(organisation) || "—"}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;color:#64748b;">Country</td><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(country) || "—"}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;color:#64748b;vertical-align:top;">Subject</td><td style="padding:8px 0;border-bottom:1px solid #e2e8f0;font-weight:600;">${escapeHtml(safeSubject)}</td></tr>
      </table>
      <p style="margin:20px 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:#64748b;font-weight:700;">Project details</p>
      <div style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;font-size:14px;">${escapeHtml(message)}</div>
    </div>
  `;

  const text = [
    "New enquiry — GeoDecision website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organisation: ${organisation || "—"}`,
    `Country: ${country || "—"}`,
    `Subject: ${safeSubject}`,
    "",
    "Project details:",
    message,
  ].join("\n");

  const secondaryInbox =
    process.env.CONTACT_EMAIL_SECONDARY?.trim() ||
    "info@geodecisionanalytics.com";
  const toRecipients = Array.from(
    new Set([config.user, secondaryInbox].map((a) => a.trim()))
  );

  const mailOptions = {
    from: `"GeoDecision Analytics" <${config.user}>`,
    to: toRecipients,
    replyTo: email,
    subject: `[Website] ${safeSubject}`,
    text,
    html,
  };

  const smtpTimeouts = {
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  };

  const createTransport = (looseTls: boolean) =>
    nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: config.user,
        pass: config.pass,
      },
      ...smtpTimeouts,
      ...(looseTls
        ? {
            tls: {
              rejectUnauthorized: false,
            },
          }
        : {}),
    });

  try {
    await createTransport(false).sendMail(mailOptions);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const code = (err as { code?: string }).code;
    const isCertChain =
      code === "ESOCKET" ||
      /self-signed certificate|certificate chain|unable to verify|UNABLE_TO_VERIFY/i.test(
        msg
      );

    if (isCertChain) {
      console.warn(
        "[contact] SMTP TLS verify failed (often antivirus/SSL inspection); retrying with relaxed TLS."
      );
      try {
        await createTransport(true).sendMail(mailOptions);
      } catch (err2) {
        console.error("[contact]", err2);
        return NextResponse.json(
          {
            error:
              process.env.NODE_ENV === "development"
                ? `Email send failed: ${err2 instanceof Error ? err2.message : String(err2)}`
                : "Could not send your message. Please try again or email us directly.",
          },
          { status: 502 }
        );
      }
    } else {
      console.error("[contact]", err);
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === "development"
              ? `Email send failed: ${msg}`
              : "Could not send your message. Please try again or email us directly.",
        },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}