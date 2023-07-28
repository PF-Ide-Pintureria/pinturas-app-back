const { Router } = require('express');
const { CartsHandlers } = require('../handlers');

const router = Router();

// 1. Get cart by idCart or idUser
router.get('/', CartsHandlers.getCarts);
// 2. Create cart
router.post('/', CartsHandlers.createCart);
// 3. Add cart to user
router.post('/add', CartsHandlers.addCartToUser);
// 4. Delete cart
router.delete('/', CartsHandlers.deleteCart);
// 5. Edit cart
router.put('/', CartsHandlers.editCart);


module.exports = router;
