const { Carts, Users } = require('../../db');
const { v4 } = require('uuid');


const createCartController = async ({ idUser, products = [] }) => {

    console.log('idUser:', idUser);
    const user = await Users.findByPk(idUser);
    // console.log('user:', user);

    const jsonProducts = products.map(product => JSON.JSON(product));

    const idCart = v4();
    console.log('idCart:', idCart);

    await user.update({
        idCart,
    });

    const createdCart = await Carts.create({
        idUser,
        products: jsonProducts,
        idCart
    });

    return createdCart;

};


module.exports = createCartController;
