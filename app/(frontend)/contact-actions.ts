"use server";

import nodemailer from "nodemailer";

export type ContactResult = { ok: boolean; error?: string };

const DEFAULT_RECIPIENT = "info@atlanticfortis.com";
const SEND_FAILED = `We couldn't send your request. Please try again, or email us at ${DEFAULT_RECIPIENT}.`;

// Collapses whitespace, including line breaks, so values are safe in single-line fields such as the subject.
function line(formData: FormData, name: string, maxLength = 200) {
  const value = formData.get(name);
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, maxLength) : "";
}

export async function submitContactForm(formData: FormData): Promise<ContactResult> {
  // Hidden from people, so only bots fill it in. Report success so they don't retry.
  if (line(formData, "website")) return { ok: true };

  const name = line(formData, "name");
  const organization = line(formData, "organization");
  const email = line(formData, "email", 254);
  const rawMessage = formData.get("message");
  const message = typeof rawMessage === "string" ? rawMessage.trim().slice(0, 5000) : "";

  if (!name || !organization) return { ok: false, error: "Please enter your name and organization." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Please enter a valid email address." };

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;
  const from = SMTP_FROM || SMTP_USER;
  if (!SMTP_HOST || !from) {
    console.error("Contact form: SMTP_HOST and SMTP_FROM (or SMTP_USER) must be set.");
    return { ok: false, error: SEND_FAILED };
  }

  const port = Number(SMTP_PORT) || 587;
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    // Never send credentials over an unencrypted connection.
    requireTLS: Boolean(SMTP_USER),
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  const details = [
    ["Name", name],
    ["Organization", organization],
    ["Email", email],
    ["Phone", line(formData, "phone", 50)],
    ["Job title", line(formData, "jobTitle")],
    ["Organization size", line(formData, "organizationSize")],
    ["Area of interest", line(formData, "service")],
    ["Preferred contact method", line(formData, "contactMethod")],
  ];

  try {
    await transport.sendMail({
      from: { name: "Atlantic Fortis Website", address: from },
      to: CONTACT_TO || DEFAULT_RECIPIENT,
      replyTo: { name, address: email },
      subject: `Website enquiry from ${name} (${organization})`,
      text: [
        ...details.map(([label, value]) => `${label}: ${value || "-"}`),
        "",
        "Requirement:",
        message || "-",
      ].join("\n"),
    });
    return { ok: true };
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return { ok: false, error: SEND_FAILED };
  }
}
