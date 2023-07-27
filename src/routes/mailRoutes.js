const { Router } = require('express');
const { MailHandlers } = require('../handlers/');


const router = Router();

// 1. POST /mail/contact
router.post('/contact', MailHandlers.sendContactEmail);
// 2. POST /mail/order
router.post('/order', MailHandlers.sendOrderEmail);


module.exports = router;
