import nodemailer from "nodemailer";
import sendGridTransport from "nodemailer-sendgrid-transport";
import dotenv from "dotenv";
dotenv.config();

console.log();

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

export const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      res.status(500).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    transporter.sendMail({
      to: "kushal.mitra1996@gmail.com",
      from: "kushal.mitra1996@gmail.com",
      subject: "Regarding your portfolio app",
      html: `
        <h5>Detailed Information</h5>
        <ul>
        <l1><p>Name: ${name}</p></l1>
        <l1><p>Email: ${email}</p></l1>
        <l1><p>Message: ${msg}</p></l1>
        </ul>`,
    });

    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Your message has not been sent. Please try again...",
    });
  }
};
