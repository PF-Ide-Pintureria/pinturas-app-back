const { Carts, Users } = require('../../db');
const { v4 } = require('uuid');

const createCartController = async ({ idUser, products = [] }) => {

    const user = await Users.findByPk(idUser) || null;
    if (!user) throw new Error('User not found');

    const jsonProducts = products.map(product => {
        return typeof product === "string" ? product : JSON.stringify(product);
    });

    const idCart = v4();

    const createdCart = await Carts.create({
        products: jsonProducts,
        idCart
    });

    await user.setCart(createdCart);

    return createdCart;

};

module.exports = createCartController;
