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
    console.log("API START");

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO;

    console.log("ENV CHECK:", {
      host,
      port,
      user,
      hasPass: !!pass,
      to,
    });

    return NextResponse.json({
      success: true,
      env: {
        host,
        port,
        user,
        hasPass: !!pass,
        to,
      },
    });
  } catch (error) {
    console.error("DEBUG ERROR:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
