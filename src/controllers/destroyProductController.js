const { Products } = require('../db.js');


const destroyProductController = async (id) => {
    const product = await Products.findByPk(id);
    if (!product) {
        throw new Error('Product not found');
    };
    await product.destroy();
    return product;
};


module.exports = destroyProductController;
