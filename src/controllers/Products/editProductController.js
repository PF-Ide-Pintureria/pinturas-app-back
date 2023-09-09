const { Products } = require('../../db.js');

const editProductController = async (id, product) => {
    // Buscar el producto por su ID en la base de datos
    const productToEdit = await Products.findByPk(id);

    if (!productToEdit) throw Error("PRODUCTO NO ENCONTRADO");

    await productToEdit.update(product);
    return productToEdit;
};

module.exports = editProductController;
