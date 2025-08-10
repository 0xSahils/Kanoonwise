const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (to, subject, text) => {
  // In development mode, just log the email instead of sending
  if (process.env.NODE_ENV === "development") {
    console.log(`[DEV MODE] Email would be sent to: ${to}`);
    console.log(`[DEV MODE] Subject: ${subject}`);
    console.log(`[DEV MODE] Content: ${text}`);
    return; // Skip actual sending in development
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: to,
      subject: subject,
      html: text,
    });
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
    console.log(`[FALLBACK] Email content for ${to}: ${text}`);
    // In development, don't throw error to avoid breaking the app
    if (process.env.NODE_ENV !== "development") {
      throw error;
    }
  }
};

module.exports = sendEmail;
