const { transporter } = require('../../services');
// const { parsed: ENV } = require('dotenv').config();
// eslint-disable-next-line no-undef
const { SENDER_EMAIL: sender_email } = process.env;

const sendOrderEmailController = ({ email, message }) => {

    const subject = `Resumen de tu orden`;

    return new Promise((resolve, reject) => {

        const mail_configs = {
            from: sender_email,
            to: email,
            subject,
            html: message,
        };

        transporter.sendMail(mail_configs, function (error,) {
            if (error) {
                console.log(error);
                return reject({ message: `An error has occured` });
            }
            return resolve({ message: "Email sent succesfuly" });
        });

    });

};

module.exports = sendOrderEmailController;
