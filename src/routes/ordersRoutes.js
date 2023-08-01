const { Router } = require('express');
const { OrdersHandlers } = require("../handlers");

const router = Router();

// 1. POST /orders/payment
router.post("/payment", OrdersHandlers.paymentOrder);
// 2. POST /orders
router.post("/", OrdersHandlers.createOrder);
// 3. GET /orders/success
router.get("/sucess/:idOrder", OrdersHandlers.successOrder);

module.exports = router;
