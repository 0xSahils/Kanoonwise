const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
    //   from: process.env.EMAIL_FROM,
      to: to,
      subject: subject,
      html: text,
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
