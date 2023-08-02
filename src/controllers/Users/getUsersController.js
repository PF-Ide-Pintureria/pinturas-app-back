const { Users } = require('../../db');


const getUsersController = async () => {
    const usersdb = await Users.findAll();
    return usersdb.map((user) => {
        // Busco el carrito del usuario
        const cart = user.cart;
        return {
            id: user.id,
            idUser: user.idUser,
            email: user.email,
            rol: user.rol,
            name: user.name,
            lastName: user.lastName,
            address: user.address,
            locality: user.locality,
            province: user.province,
            phone: user.phone,
            image: user.image,
            idCart: cart?.id || null,
            active: user.active,
            isBanned: user.isBanned,
            authZero: user.authZero
        };
    });
};


module.exports = getUsersController;
