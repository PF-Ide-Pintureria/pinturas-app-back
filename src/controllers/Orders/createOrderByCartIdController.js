const { Carts } = require('../../db');
const createOrder = require('./createOrderController');


const creatOrderByCartIdController = async (cartId) => {

    const cart = await Carts.findOne({ where: { idCart: cartId } });

    if (!cart) throw new Error('No se encontró el carrito');

    const { products, idUser } = cart;

    const order = await createOrder(products, idUser);

    return order;

};


module.exports = creatOrderByCartIdController;
