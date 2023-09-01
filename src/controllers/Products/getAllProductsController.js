const { Products } = require('../../db.js');

const getAllProductsController = async () => {
    const dbProductsResults = await Products.findAll();
    return dbProductsResults.map((product) => product.dataValues);
};

module.exports = getAllProductsController;
