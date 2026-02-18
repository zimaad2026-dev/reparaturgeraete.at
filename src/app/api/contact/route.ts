import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type IncomingBody = {
  vorname?: string;
  nachname?: string;
  telefon?: string;
  email?: string;
  plz?: string;
  geraetetyp?: string;
  message?: string;

  // fallback keys (if old form still used)
  firstName?: string;
  lastName?: string;
  phone?: string;
  location?: string;
  appliance?: string;
};

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env: ${name}`);
  }
  return value;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IncomingBody;

    // Normalise (German + fallback)
    const vorname = body.vorname ?? body.firstName ?? "";
    const nachname = body.nachname ?? body.lastName ?? "";
    const telefon = body.telefon ?? body.phone ?? "";
    const email = body.email ?? "";
    const plz = body.plz ?? body.location ?? "";
    const geraetetyp = body.geraetetyp ?? body.appliance ?? "";
    const message = body.message ?? "";

    if (!vorname || !nachname || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Pflichtfelder fehlen." },
        { status: 400 }
      );
    }

    const host = getEnv("SMTP_HOST");
    const port = Number(getEnv("SMTP_PORT"));
    const user = getEnv("SMTP_USER");
    const pass = getEnv("SMTP_PASS");
    const to = getEnv("CONTACT_TO");

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Neue Anfrage – ${vorname} ${nachname}`;

    const text = `
Name: ${vorname} ${nachname}
Telefon: ${telefon || "-"}
E-Mail: ${email}
PLZ / Ort: ${plz || "-"}
Gerätetyp: ${geraetetyp || "-"}

Nachricht:
${message}
`;

    const html = `
      <p><strong>Name:</strong> ${escapeHtml(vorname)} ${escapeHtml(nachname)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(telefon || "-")}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>PLZ / Ort:</strong> ${escapeHtml(plz || "-")}</p>
      <p><strong>Gerätetyp:</strong> ${escapeHtml(geraetetyp || "-")}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"Website Kontakt" <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
