const sendContactEmail = require('./sendContactEmailHandler');
const sendOrderEmail = require('./sendOrderEmailHandler');


const MailHandlers = {
    sendContactEmail,
    sendOrderEmail,
};


module.exports = MailHandlers;
