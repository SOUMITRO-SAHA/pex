import nodemailer from "nodemailer";
import { config } from ".";

export const transport = nodemailer.createTransport({
  host: config.MAIL_HOST,
  port: config.MAIL_PORT,
  service: config.MAIL_SERVICE,
  auth: {
    user: config.MAIL_AUTH_USER,
    pass: config.MAIL_AUTH_PASSWORD,
  },
});

export const mailOptions = {
  from: config.MAIL_FROM,
  to: config.MAIL_TO,
};
