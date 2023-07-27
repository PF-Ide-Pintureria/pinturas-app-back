const { Router } = require('express');
const { MailHandlers } = require('../handlers/');


const router = Router();

// 1. POST /mail/contact
router.post('/contact', MailHandlers.sendContactEmail);
// 2. POST /mail/order
router.post('/order', MailHandlers.sendOrderEmail);
// 3. POST /mail/register
router.post('/register/:id', MailHandlers.sendRegisterEmail);


module.exports = router;
