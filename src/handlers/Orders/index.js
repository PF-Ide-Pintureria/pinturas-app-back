const createOrder = require("./createOrderHandler");
const paymentOrder = require("./paymentOrderHandler");
const successOrder = require("./successOrderHandler");


const OrdersHandlers = {
    createOrder,
    paymentOrder,
    successOrder
};


module.exports = OrdersHandlers;
