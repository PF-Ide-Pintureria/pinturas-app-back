const { Router } = require('express');
const { CartsHandlers } = require('../handlers');

const router = Router();

// 1. Get cart by idCart or idUser
router.get('/', CartsHandlers.findCartById)


module.exports = router;
