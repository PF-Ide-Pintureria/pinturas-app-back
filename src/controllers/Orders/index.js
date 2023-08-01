// 1. Crear order payment
const createOrder = require('./createOrderController');
const paymentOrder = require('./paymentOrderController');
const successOrder = require('./successOrderController');


const OrdersControllers = {
    createOrder,
    paymentOrder,
    successOrder
};

module.exports = OrdersControllers;
