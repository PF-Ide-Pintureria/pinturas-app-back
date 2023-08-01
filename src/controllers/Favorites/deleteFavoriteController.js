const { Users, Products } = require("../../db");

const addFavoriteController = async (idUser, idProduct) => {
    const user = await Users.findByPk(idUser);
    if (!user) throw Error("Usuario no encontrado");

    const productFavorite = await Products.findByPk(idProduct);
    if (!productFavorite) throw Error("Producto no econtrado");

    await user.removeProduct(productFavorite);

    return await user.getProducts();
};

module.exports = addFavoriteController;
