const { Users } = require("../../db");

const getFavoritesController = async (idUser) => {
    //valido que el usuario exista
    const user = await Users.findByPk(idUser);
    if (!user) throw Error("Usuario no encontrado");

    return await user.getProducts();
};

module.exports = getFavoritesController;
