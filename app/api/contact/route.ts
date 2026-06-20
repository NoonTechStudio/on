import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, companyName, industry, budget, projectScope } = body;

    if (!fullName || !email || !projectScope) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.zoho.in",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false, // STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `New enquiry from ${fullName}${companyName ? ` — ${companyName}` : ""}`;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f2a43">
        <div style="background:linear-gradient(120deg,#0E5E8A,#0FA3A3);padding:20px 24px;border-radius:12px 12px 0 0">
          <h2 style="color:#fff;margin:0;font-size:20px">New Website Enquiry</h2>
          <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px">Received from oceannova.co.uk</p>
        </div>
        <div style="background:#f8fafe;border:1px solid #e2eaf3;border-top:none;border-radius:0 0 12px 12px;padding:24px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px 0;color:#5a7a8a;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${fullName}</td></tr>
            <tr><td style="padding:8px 0;color:#5a7a8a">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#0E5E8A">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#5a7a8a">Phone</td><td style="padding:8px 0">${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#5a7a8a">Company</td><td style="padding:8px 0">${companyName || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#5a7a8a">Industry</td><td style="padding:8px 0">${industry || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#5a7a8a">Budget</td><td style="padding:8px 0">${budget || "—"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #dce8f0;margin:16px 0"/>
          <p style="color:#5a7a8a;font-size:13px;margin:0 0 8px">Project details</p>
          <p style="background:#fff;border:1px solid #dce8f0;border-radius:8px;padding:14px;margin:0;white-space:pre-wrap;font-size:14px">${projectScope}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Oceannova Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? "hello@oceannova.co.uk",
      replyTo: email,
      subject,
      html,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Company: ${companyName || "—"}`,
        `Industry: ${industry || "—"}`,
        `Budget: ${budget || "—"}`,
        "",
        projectScope,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact-route]", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
