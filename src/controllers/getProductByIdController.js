const { Products } = require('../db.js');


const getProductByIdController = async (id) => {
    const product = await Products.findByPk(id);
    return product;
};

module.exports = getProductByIdController;
