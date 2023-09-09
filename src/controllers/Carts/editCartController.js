const { Carts, Users } = require('../../db');

const editCartController = async ({ idUser, idCart, products }) => {

    const user = await Users.findOne({
        where: {
            id: idUser
        }
    });

    const cart = idCart ? await Carts.findOne({
        where: {
            idCart
        }
    }) : await Carts.findOne({
        where: {
            idUser
        }
    });

    if (!cart && !user) {
        throw new Error('No user or cart found');
    }

    const jsonProducts = products ? products.map((product) => {
        return JSON.stringify(product);
    }) : [];

    await cart.update({

        products: jsonProducts,

    });

    if (idUser) {
        await user.update({
            idCart: cart.idCart
        });
        await cart.update({
            idUser: user.id
        });
    }

    return cart;

};

module.exports = editCartController;
