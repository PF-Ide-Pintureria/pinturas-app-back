const { Users } = require('../../db');


const getUsersController = async () => {
    const usersdb = await Users.findAll();
    return usersdb.map((user) => {
        return {
            id: user.id,
            email: user.email,
            rol: user.rol,
            name: user.name,
            idCart: user.idCart
        };
    });
};


module.exports = getUsersController;
