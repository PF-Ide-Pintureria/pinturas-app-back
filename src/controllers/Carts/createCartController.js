const { Carts, Users } = require('../../db');
const { v4 } = require('uuid');


const createCartController = async ({ idUser, products = [] }) => {

    // console.log('idUser:', idUser);
    const user = await Users.findByPk(idUser) || null;
    if (!user) throw new Error('User not found');
    // console.log('user:', user);

    const jsonProducts = products.map(product => JSON.stringify(product));

    const idCart = v4();
    // console.log('idCart:', idCart);


    const createdCart = await Carts.create({
        products: jsonProducts,
        idCart
    });

    await user.setCart(createdCart);

    return createdCart;

};


module.exports = createCartController;
