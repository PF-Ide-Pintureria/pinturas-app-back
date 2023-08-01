const { Users, Products } = require("../../db");

const addFavoriteController = async (idUser, idProduct) => {
    //valido que el usuario exista
    const user = await Users.findByPk(idUser);
    if (!user) throw Error("Usuario no encontrado");

    //valido que el producto exista
    const productFavorite = await Products.findByPk(idProduct);
    if (!productFavorite) throw Error("Producto no econtrado");

    // valido que no se agregue dos veces el mismo producto como fav
    const favoriteProducts = await user.getProducts();
    const isAlreadyFavorite = favoriteProducts.some((product) => product.idProduct === idProduct);
    if (isAlreadyFavorite) throw new Error("El producto ya es favorito");

    await user.addProduct(productFavorite);

    return await user.getProducts();
};

module.exports = addFavoriteController;
