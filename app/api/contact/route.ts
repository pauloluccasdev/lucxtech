import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] || character);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = clean(body.name, 100);
    const email = clean(body.email, 160).toLowerCase();
    const whatsapp = clean(body.whatsapp, 30);
    const service = clean(body.service, 120);
    const message = clean(body.message, 3000);
    const website = clean(body.website, 200);

    if (website) return NextResponse.json({ message: "Mensagem recebida." });
    if (name.length < 2 || !EMAIL_PATTERN.test(email) || whatsapp.length < 10 || !service || message.length < 20) {
      return NextResponse.json({ message: "Revise o nome, o e-mail, o WhatsApp, o serviço e os detalhes antes de enviar." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    if (!smtpUser || !smtpPassword) {
      console.error("Contact form SMTP credentials are not configured.");
      return NextResponse.json({ message: "O envio está temporariamente indisponível. Tente novamente em instantes." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_PORT || "465") === "465",
      auth: { user: smtpUser, pass: smtpPassword },
    });

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      whatsapp: escapeHtml(whatsapp),
      service: escapeHtml(service),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    };

    await transporter.sendMail({
      from: `Site Lucx <${smtpUser}>`,
      to: process.env.CONTACT_TO_EMAIL || "contato.pauloraimundo@gmail.com",
      replyTo: `${name} <${email}>`,
      subject: `Novo lead — ${service} — ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nWhatsApp: ${whatsapp}\nServiço de interesse: ${service}\n\nDetalhes:\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px;color:#171717"><p style="color:#047857;font-size:12px;text-transform:uppercase;letter-spacing:.12em">Novo lead · lucxtech.com</p><h1 style="font-size:28px">${safe.name}</h1><p><strong>E-mail:</strong> ${safe.email}<br><strong>WhatsApp:</strong> ${safe.whatsapp}<br><strong>Serviço de interesse:</strong> ${safe.service}</p><hr style="border:0;border-top:1px solid #ddd"><h2 style="font-size:16px">O que a pessoa precisa</h2><p style="line-height:1.6">${safe.message}</p></div>`,
    });

    return NextResponse.json({ message: "Mensagem enviada com sucesso." });
  } catch (error) {
    console.error("Contact form send failed:", error instanceof Error ? error.message : error);
    return NextResponse.json({ message: "Não foi possível enviar agora. Tente novamente mais tarde." }, { status: 500 });
  }
}
