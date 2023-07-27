const sendContactEmail = require('./sendContactEmailHandler');
const sendOrderEmail = require('./sendOrderEmailHandler');
const sendRegisterEmail = require('./sendRegisterEmailHandler');


const MailHandlers = {
    sendContactEmail,
    sendOrderEmail,
    sendRegisterEmail,
};


module.exports = MailHandlers;
