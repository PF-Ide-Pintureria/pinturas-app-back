const { Users, Products } = require("../../db");

const addFavoriteController = async (idUser, idProduct) => {
    const user = await Users.findByPk(idUser);
    if (!user) throw Error("Error: Usuario no encontrado");

    const productFavorite = await Products.findByPk(idProduct);
    if (!productFavorite) throw Error("Error: Producto no econtrado");

    await user.addProduct(productFavorite);

    return await user.getProducts();
};

module.exports = addFavoriteController;
