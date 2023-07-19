const getAllProductsHandler = require('./getAllProductsHandler');
const getCategoriesHandler = require('./getCategoriesHandler');
const createProductHandler = require('./createProductHandler');
const deleteProductHandler = require("./deleteProductHandler");
const editProductHandler = require("./editProductHandler");
const getProductByIdHandler = require("./getProductByIdHandler");


module.exports = {
    getAllProductsHandler,
    getCategoriesHandler,
    createProductHandler,
    deleteProductHandler,
    editProductHandler,
    getProductByIdHandler,
};
