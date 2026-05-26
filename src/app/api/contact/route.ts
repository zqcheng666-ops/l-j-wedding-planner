import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  weddingDate?: unknown;
  location?: unknown;
  guestCount?: unknown;
  preferredLanguage?: unknown;
  message?: unknown;
  gdprConsent?: unknown;
  website?: unknown;
};

const MAX_LENGTH = {
  name: 120,
  email: 160,
  phone: 80,
  weddingDate: 40,
  location: 180,
  guestCount: 40,
  preferredLanguage: 40,
  message: 3000
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (readString(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const data = {
    name: readString(payload.name, MAX_LENGTH.name),
    email: readString(payload.email, MAX_LENGTH.email),
    phone: readString(payload.phone, MAX_LENGTH.phone),
    weddingDate: readString(payload.weddingDate, MAX_LENGTH.weddingDate),
    location: readString(payload.location, MAX_LENGTH.location),
    guestCount: readString(payload.guestCount, MAX_LENGTH.guestCount),
    preferredLanguage: readString(payload.preferredLanguage, MAX_LENGTH.preferredLanguage),
    message: readString(payload.message, MAX_LENGTH.message)
  };

  if (!data.name || !data.email || !data.preferredLanguage || !data.message || payload.gdprConsent !== true) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(data.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    return NextResponse.json({ ok: false, error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);
  const submittedAt = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Berlin"
  }).format(new Date());

  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone / WhatsApp", data.phone || "Not provided"],
    ["Wedding Date", data.weddingDate || "Not provided"],
    ["Wedding Location", data.location || "Not provided"],
    ["Guest Count", data.guestCount || "Not provided"],
    ["Preferred Language", data.preferredLanguage],
    ["Submitted At", submittedAt]
  ] as const;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1E1E1B; line-height: 1.6;">
      <div style="max-width: 680px; margin: 0 auto; padding: 32px; background: #FFFDF8; border: 1px solid #E8D7B5;">
        <p style="margin: 0 0 8px; color: #B9965E; letter-spacing: 0.14em; text-transform: uppercase; font-size: 12px;">L&J Wedding Planner</p>
        <h1 style="margin: 0 0 24px; font-family: Georgia, serif; font-size: 32px; font-weight: 400;">New wedding inquiry</h1>
        <table style="width: 100%; border-collapse: collapse; margin: 0 0 28px;">
          <tbody>
            ${rows.map(([label, value]) => renderRow(label, value)).join("")}
          </tbody>
        </table>
        <div style="padding-top: 20px; border-top: 1px solid #E8D7B5;">
          <h2 style="margin: 0 0 10px; font-family: Georgia, serif; font-size: 22px; font-weight: 400;">Message</h2>
          <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(data.message)}</p>
        </div>
      </div>
    </div>
  `;

  const text = [
    "New wedding inquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    data.message
  ].join("\n");

  const emailPayload = {
    from: contactFromEmail,
    to: [contactToEmail],
    subject: `New wedding inquiry from ${data.name}`,
    html,
    text,
    reply_to: data.email
  };

  const { error } = await resend.emails.send(emailPayload);

  if (error) {
    return NextResponse.json({ ok: false, error: "Email could not be sent." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function readString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function renderRow(label: string, value: string) {
  return `
    <tr>
      <td style="width: 38%; padding: 12px 0; border-top: 1px solid #E8D7B5; color: #8F8172;">${escapeHtml(label)}</td>
      <td style="padding: 12px 0; border-top: 1px solid #E8D7B5;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
