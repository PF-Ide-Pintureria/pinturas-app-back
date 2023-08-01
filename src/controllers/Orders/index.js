// 1. Crear order payment
const createOrder = require('./createOrderController');
const paymentOrder = require('./paymentOrderController');
const successOrder = require('./successOrderController');
const failureOrder = require('./failureOrderController');


const OrdersControllers = {
    createOrder,
    paymentOrder,
    successOrder,
    failureOrder
};

module.exports = OrdersControllers;
