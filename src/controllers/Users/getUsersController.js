const { Users } = require('../../db');


const getUsersController = async () => {
    const usersdb = await Users.findAll();
    const mappedUsers = usersdb.map(async (user) => {
        // Busco el carrito del usuario
        let idCart;

        let cart = await user.getCart();
        if (cart) {
            idCart = cart.dataValues.idCart;
        }

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
            idCart: idCart || null,
            active: user.active,
            isBanned: user.isBanned,
            authZero: user.authZero
        };
    });
    const users = await Promise.all(mappedUsers);
    return users;
};


module.exports = getUsersController;
