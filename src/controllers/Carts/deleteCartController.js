const { Users, Carts } = require('../../db');


const deleteUserController = async ({ idUser, idCart }) => {

    const user = idUser ? await Users.findOne({
        where: {
            id: idUser
        }
    }) : null;

    const cart = idCart ? await Carts.findOne({
        where: {
            idCart
        }
    }) : await Carts.findOne({
        where: {
            idUser
        }
    }) || null;

    if (!cart && !user) {
        throw new Error('No user or cart found');
    }

    await user.update({
        idCart: null
    });

    await cart.destroy();

    return cart;

};


module.exports = deleteUserController;
