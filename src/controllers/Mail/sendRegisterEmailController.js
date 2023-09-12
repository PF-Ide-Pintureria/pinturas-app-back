const { transporter } = require('../../services/nodemailer');
// const { parsed: ENV } = require('dotenv').config();
// eslint-disable-next-line no-undef
const { SENDER_MAIL: sender_email } = process.env;
const { Users } = require('../../db');

const sendRegisterEmailController = async ({ message, id }) => {

    const subject = `Bienvenido a la familia de IDE Pinturería`;
    const user = await Users.findOne({ where: { id } });
    if (!user) throw new Error(`User with id ${id} not found`);
    const email = user.email;

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

module.exports = sendRegisterEmailController;
