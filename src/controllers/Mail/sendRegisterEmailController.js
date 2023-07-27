const { transporter } = require('../../services');
require('dotenv').config();
const { SENDER_EMAIL: sender_email } = process.env;
const { Users } = require('../../db');



const sendRegisterEmailController = async ({ message, id }) => {

    const subject = `Bienvenido a la familia de IDE Pinturería`;
    const user = await Users.findOne({ where: { id } });
    if(!user) return reject({ message: `An error has occured` });
    const email = user.email;

    return new Promise((resolve, reject) => {

        const mail_configs = {
            from: sender_email,
            to: email,
            subject,
            html: message,
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

module.exports = sendRegisterEmailController;
