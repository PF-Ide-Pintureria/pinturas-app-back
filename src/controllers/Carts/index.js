const createCart = require('./createCartController');
const findCartById = require('./findCartByIdController');
const addCartToUser = require('./addCartToUserController');
const deleteCart = require('./deleteCartController');
const editCart = require('./editCartController');
const getCarts = require('./getCartsController');


const CartsControllers = {
    createCart,
    findCartById,
    addCartToUser,
    deleteCart,
    editCart,
    getCarts
};

module.exports = CartsControllers;
