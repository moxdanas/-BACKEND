import { text } from "express";
import Mailgen from "mailgen";

import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagelink.com",
    },
  });
  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_SMTP_HOST,
    port: process.env.MAIL_SMTP_PORT,
    auth: {
      user: process.env.MAIL_SMTP_USER,
      pass: process.env.MAIL_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };
  try {
    await transporter.sendEmail(mail);
  } catch (error) {
    console.error(
      "Email service fialed silently , Make sure that you have provided your mail trap credentials in the .env file !"
    );
    console.error("error:", error);
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App ! , We're excited to have you on board",
      action: {
        instructions:
          "to verify your email please click on the following button!",
        button: {
          color: "#1aae5aff",
          text: "Verify your email !",
          link: verificationUrl,
        },
      },
      outro: "Need help , or have questions? Just reply to this email !",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset your password",
      action: {
        instructions:
          "to reset the password click on the following button or link below!",
        button: {
          color: "rgb(150, 26, 22)",
          text: "Reset Password !",
          link: passwordResetUrl,
        },
      },
      outro: "Need help , or have questions? Just reply to this email !",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
