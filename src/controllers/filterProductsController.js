const { Products } = require('../db.js');
const { Op } = require('sequelize');


const filterProductsController =
    async (name, category, lowPrice, highPrice) => {
        // si no se especifica un nombre, se devuelven todos los productos
        let filteredProducts = await Products.findAll();
        // si se especifica un nombre, se filtran los productos por nombre
        if (name) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.name.toLowerCase().includes(name.toLowerCase());
            });
        };
        // si se especifica una categoría, se filtran los productos por
        // categoría
        if (category) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.category === category;
            });
        };
        // si se especifica un precio mínimo, se filtran los productos por
        // precio mínimo
        if (lowPrice) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.price >= lowPrice;
            });
        };
        // si se especifica un precio máximo, se filtran los productos por
        // precio máximo
        if (highPrice) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.price <= highPrice;
            });
        };
        return filteredProducts;
    };


module.exports = filterProductsController;
