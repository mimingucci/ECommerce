const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");
require("dotenv").config();
const sendMail = asyncHandler(async ({ email, html }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "",
      pass: "",
    },
  });
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"mimingucci 👻" <no-reply@mimingucci.email>', // sender address
    to: email, // list of receivers
    subject: "Forgot password ?", // Subject line
    html: html, // html body
  });
  return info;
});

module.exports = sendMail;
