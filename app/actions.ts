// app/actions.ts

"use server";

import nodemailer from "nodemailer";

export async function sendEmail(
  formData: FormData
) {
  try {
    // ====================================
    // FORM DATA
    // ====================================

    const name = formData.get(
      "name"
    ) as string;

    const email = formData.get(
      "email"
    ) as string;

    const phone = formData.get(
      "phone"
    ) as string;

    const subject = formData.get(
      "subject"
    ) as string;

    const message = formData.get(
      "message"
    ) as string;

    // ====================================
    // VALIDATION
    // ====================================

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return {
        success: false,

        error:
          "Please fill all required fields.",
      };
    }

    // ====================================
    // SMTP TRANSPORTER
    // ====================================

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: process.env.SMTP_USER,

          pass: process.env.SMTP_PASS,
        },
      });

    // ====================================
    // VERIFY SMTP
    // ====================================

    await transporter.verify();

    // ====================================
    // MAIL TO ADMIN
    // ====================================

    await transporter.sendMail({
      from: process.env.SMTP_USER,

      to: process.env.ADMIN_EMAIL,

      replyTo: email,

      subject: `New Inquiry - ${subject}`,

      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2 style="color:#36B1C7;">
            New Website Inquiry
          </h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone || "N/A"}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject}
          </p>

          <div style="margin-top:20px;">
            <strong>Message:</strong>

            <p style="line-height:1.8;">
              ${message}
            </p>
          </div>
        </div>
      `,
    });

    // ====================================
    // AUTO REPLY TO CUSTOMER
    // ====================================

    await transporter.sendMail({
      from: process.env.SMTP_USER,

      to: email,

      subject:
        "We Received Your Inquiry",

      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2 style="color:#36B1C7;">
            Thank You ${name}
          </h2>

          <p style="line-height:1.8;">
            We have successfully received your inquiry.
          </p>

          <p style="line-height:1.8;">
            Our team will contact you shortly.
          </p>

          <div style="margin-top:20px;padding:20px;background:#f8fafc;border-radius:12px;">
            <strong>Your Message:</strong>

            <p style="line-height:1.8;">
              ${message}
            </p>
          </div>

          <br />

          <p>
            Regards,
          </p>

          <h3>
            TALA AABDUL RAHMAN ALMUHANNA CO.
          </h3>
        </div>
      `,
    });

    // ====================================
    // SUCCESS
    // ====================================

    return {
      success: true,

      message:
        "Inquiry sent successfully.",
    };
  } catch (error) {
    console.error(
      "MAIL_ERROR:",
      error
    );

    return {
      success: false,

      error:
        error instanceof Error
          ? error.message
          : "Mail sending failed",
    };
  }
}