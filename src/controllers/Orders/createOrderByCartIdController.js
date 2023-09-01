const { Carts } = require('../../db');
const createOrder = require('./createOrderController');

const creatOrderByCartIdController = async (cartId) => {

    const cart = await Carts.findOne({ where: { idCart: cartId } });

    if (!cart) throw new Error('No se encontró el carrito');

    const { products, userId } = cart;

    if (!userId) throw new Error('No se encontró el usuario');
    const order = await createOrder(products, userId);

    return order;

};

module.exports = creatOrderByCartIdController;
