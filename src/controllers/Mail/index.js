const sendContactEmail = require("./sendContactEmailController");
const sendOrderEmail = require("./sendOrderEmailController");


const MailControllers = {
    sendContactEmail,
    sendOrderEmail,
};

module.exports = MailControllers;
