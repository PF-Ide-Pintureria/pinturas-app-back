const { Carts } = require('../../db');


const getCartsController = async () => {

    const carts = await Carts.findAll();

    return carts.map((cart) => {

        return {

            id: cart.id,
            idCart: cart.idCart,
            idUser: cart.userId,
            products: cart.products

        };

    });

};


module.exports = getCartsController;
