const { Products } = require('../../db.js');

const deleteProductController = async (id) => {
    // Buscar el producto por su ID en la base de datos
    const product = await Products.findByPk(id);

    if (!product) throw Error("PRODUCTO NO ENCONTRADO")

    await product.update({ active: false })
        .then(productDeleted => productDeleted)
        .catch(error => { throw error })

}

module.exports = deleteProductController;
