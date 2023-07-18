const products = require('../utils/products.json');
const { Products } = require('../db.js');
const db = require('../db.js');

const getAllProductsController = async () => {
    const dbProductsResults = await Products.findAll();
    const dbProducts = dbProductsResults.map((product) => product.dataValues);
    const allProducts = dbProducts;
    return allProducts;
};

module.exports = getAllProductsController;
