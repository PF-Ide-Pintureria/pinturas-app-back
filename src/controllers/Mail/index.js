const sendContactEmail = require("./sendContactEmailController");
const sendOrderEmail = require("./sendOrderEmailController");
const sendRegisterEmail = require("./sendRegisterEmailController");


const MailControllers = {
    sendContactEmail,
    sendOrderEmail,
    sendRegisterEmail,
};

module.exports = MailControllers;
