import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;

//ljhwxmmgzyaqnfot

export const sender = nodemailer.createTransport({
  host: "srvc51.turhost.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
