const { Carts } = require('../../db');


const findCartByIdController = async ({ idCart, idUser }) => {

    if (!idCart && !idUser) {
        throw new Error('Faltan parámetros de búsqueda');
    }

    let cart = idCart ? Carts.findOne({
        where: {
            idCart
        }
    }) : Carts.findOne({
        where: {
            userId: idUser
        }
    });

    return cart;

};


module.exports = findCartByIdController;
