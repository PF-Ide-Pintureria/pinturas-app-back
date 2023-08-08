const { Router } = require('express');
const { OrdersHandlers } = require("../handlers");


const router = Router();

// 1. POST /orders/payment
router.post("/payment", OrdersHandlers.paymentOrder);
// 2. POST /orders
router.post("/", OrdersHandlers.createOrder);
// 3. GET /orders/success
router.post("/sucess/:idOrder", OrdersHandlers.successOrder);
// 4. GET /orders/failure
router.post("/failure/:idOrder", OrdersHandlers.failureOrder);
// 5. GET /orders/
router.get("/", OrdersHandlers.getOrders);
// 6. POST /orders/cart
router.post("/cart", OrdersHandlers.createOrderByCartId);
// 7. WEBHOOK /orders/webhook
router.post("/webhook/:idOrder", OrdersHandlers.webHook);
// 8. GET /orders/usser
router.get("/user/:userId", OrdersHandlers.getOrdersByUserId);


module.exports = router;
