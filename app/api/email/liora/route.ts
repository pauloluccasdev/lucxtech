import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_RECIPIENTS = 3;
const MAX_SUBJECT_LENGTH = 180;
const MAX_TEXT_LENGTH = 20_000;
const MAX_HTML_LENGTH = 60_000;
const MAX_REQUEST_BYTES = 90_000;

type RelayPayload = {
  to?: unknown;
  subject?: unknown;
  text?: unknown;
  html?: unknown;
};

function json(message: string, status: number) {
  return NextResponse.json(
    { ok: false, message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

function isAuthorized(header: string | null, secret: string) {
  if (!header?.startsWith("Bearer ")) return false;

  const provided = Buffer.from(header.slice(7), "utf8");
  const expected = Buffer.from(secret, "utf8");
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function parseRecipients(value: unknown) {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_RECIPIENTS) return null;

  const recipients = value.map((item) => clean(item, 160).toLowerCase());
  return recipients.every((email) => EMAIL_PATTERN.test(email)) ? recipients : null;
}

export async function POST(request: Request) {
  const relaySecret = process.env.LIORA_EMAIL_RELAY_SECRET;
  if (!relaySecret) {
    console.error("Liora email relay is missing LIORA_EMAIL_RELAY_SECRET.");
    return json("Serviço de e-mail indisponível.", 503);
  }

  if (!isAuthorized(request.headers.get("authorization"), relaySecret)) {
    return json("Não autorizado.", 401);
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_REQUEST_BYTES) return json("Conteúdo muito grande.", 413);

  let body: RelayPayload;
  try {
    body = (await request.json()) as RelayPayload;
  } catch {
    return json("JSON inválido.", 400);
  }

  const recipients = parseRecipients(body.to);
  const subject = clean(body.subject, MAX_SUBJECT_LENGTH);
  const text = clean(body.text, MAX_TEXT_LENGTH);
  const html = clean(body.html, MAX_HTML_LENGTH);

  if (!recipients || !subject || (!text && !html)) {
    return json("Informe destinatário, assunto e conteúdo válidos.", 400);
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  if (!smtpUser || !smtpPassword) {
    console.error("Liora email relay SMTP credentials are not configured.");
    return json("Serviço de e-mail indisponível.", 503);
  }

  const replyTo = clean(process.env.LIORA_EMAIL_REPLY_TO, 160).toLowerCase();
  if (replyTo && !EMAIL_PATTERN.test(replyTo)) {
    console.error("Liora email relay has an invalid LIORA_EMAIL_REPLY_TO.");
    return json("Serviço de e-mail indisponível.", 503);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_PORT || "465") === "465",
      auth: { user: smtpUser, pass: smtpPassword },
    });

    await transporter.sendMail({
      from: `Liora Closet via Lucx Tech <${smtpUser}>`,
      to: recipients,
      replyTo: replyTo || undefined,
      subject,
      text: text || undefined,
      html: html || undefined,
    });

    return NextResponse.json(
      { ok: true },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Liora email relay send failed:", error instanceof Error ? error.message : "unknown error");
    return json("Não foi possível enviar o e-mail.", 502);
  }
}
