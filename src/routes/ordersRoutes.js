const { Router } = require('express');
const { OrdersHandlers } = require("../handlers");

const router = Router();

// 1. POST /orders/payment
router.post("/payment", OrdersHandlers.createOrder);

module.exports = router;
