const { Router } = require('express');
const { OrdersHandlers } = require("../handlers");
const { createOrder } = require('../controllers/Orders');

const router = Router();

// 1. POST /orders/payment
//router.post("/payment", OrdersHandlers.paymentOrder);
//2. POST /orders
router.post("/", OrdersHandlers.createOrder);

module.exports = router;
