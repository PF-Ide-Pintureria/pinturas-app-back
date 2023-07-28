const addCartToUser = require('./addCartToUserHandler');
const createCart = require('./createCartHandler');
const deleteCart = require('./deleteCartHandler');
const editCart = require('./editCartHandler');
const findCartById = require('./findCartByIdHandler');
const getCarts = require('./getCartsHandler');


const CartsHandlers = {
    findCartById,
    createCart,
    addCartToUser,
    deleteCart,
    editCart,
    getCarts
};

module.exports = CartsHandlers;
