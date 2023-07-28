const { transporter } = require('../../services');
require('dotenv').config();
const { SENDER_MAIL: email } = process.env;


const sendContactEmailController = ({ name, message }) => {

    const subject = `Contacto de ${name}`;

    return new Promise((resolve, reject) => {

        const mail_configs = {
            from: email,
            to: email,
            subject,
            text: message,
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: `An error has occured` });
            }
            return resolve({ message: "Email sent succesfuly" });
        });

    });

};


module.exports = sendContactEmailController;
