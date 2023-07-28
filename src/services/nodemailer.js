const nodemailer = require("nodemailer");
require("dotenv").config();
const { SENDER_MAIL: email, SENDER_PASS: password } = process.env;

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
        user: email,
        pass: password,
    },
    tls: {
        rejectUnauthorized: false,
    }
});


module.exports = transporter;
