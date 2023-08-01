const createOrder = require("./createOrderHandler");
const paymentOrder = require("./paymentOrderHandler");
const successOrder = require("./successOrderHandler");
const failureOrder = require("./failureOrderHandler");


const OrdersHandlers = {
    createOrder,
    paymentOrder,
    successOrder,
    failureOrder
};


module.exports = OrdersHandlers;
