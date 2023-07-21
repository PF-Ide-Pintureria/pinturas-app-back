const getAllProductsController = require('./getAllProductsController');
const getProductByNameController = require('./getProductByNameController');
const getCategoriesController = require('./getCategoriesController');
const createProductController = require('./createProductController');
const uploadFromJSONController = require('./uploadFromJSONController');
const deleteProductController = require("./deleteProductController");
const editProductController = require("./editProductController");
const getProductByIdController = require("./getProductByIdController");
const filterAndOrderProductsController = require("./filterAndOrderProductsController");


module.exports = {
    getAllProductsController,
    getProductByNameController,
    getCategoriesController,
    createProductController,
    uploadFromJSONController,
    deleteProductController,
    editProductController,
    getProductByIdController,
    filterAndOrderProductsController,
};
