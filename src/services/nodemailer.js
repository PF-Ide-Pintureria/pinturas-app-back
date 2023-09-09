const nodemailer = require("nodemailer");
// eslint-disable-next-line no-undef
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
