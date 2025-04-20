const nodemailer = require("nodemailer");
require("dotenv").config();

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome To Ganya!</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");

      body {
        font-family: "Inter", Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333333;
        margin: 0;
        padding: 0;
        background-color: #f7f7f7;
      }

      .container {
        max-width: 600px;
        margin: 10px auto;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
      }

      .header {
        margin-bottom: 2px;
      }

      h6 {
        font-size: 18px;
        font-weight: 600;
        margin-top: 5px;
        margin-bottom: 1px;
      }

      .accent {
        color: #f87171;
      }

      p {
        margin-bottom: 16px;
      }

      .footer {
        margin-top: 10px;
        border-top: 1px solid #e5e5e5;
      }

      .signature {
        color: #f87171;
        font-weight: 600;
        margin-bottom: -10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h6>welcome to <span class="accent">ganya.</span></h6>
      </div>

      <p>
        hello friend, <br />
        thank you for signing up for <span class="accent">ganya.</span>! great
        to have you on board.
      </p>

      <div class="footer">
        <p class="signature">have fun,</p>
        <p>Vincent Kwaku Kpemlie [Developer]</p>
      </div>
    </div>
  </body>
</html>
`;

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "689e67bee20a4a",
    pass: "5f8a70345befb9",
  },
});

const sendNewUserMail = async (to) => {
  try {
    const mailOptions = {
      from: "ganya@thelocalgodd.me",
      to: to,
      subject: "welcome to ganya.",
      html: html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// sendNewUserMail("to@example.com");

module.exports = { sendNewUserMail };
