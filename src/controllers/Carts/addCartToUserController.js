const { Carts, Users } = require('../../db');

const addCartToUserController = async ({ idUser, idCart }) => {
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
    }) || await Carts.create({
        idUser
    });
    await user.update({
        idCart: cart.idCart
    });
    return cart;
};

module.exports = addCartToUserController;
