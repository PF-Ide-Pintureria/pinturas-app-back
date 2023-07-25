// 1. Crear Producto
const createProduct = require('./createProductHandler');
// 2. Borra Producto
const deleteProduct = require('./deleteProductHandler');
// 3. Editar Producto
const editProduct = require('./editProductHandler');
// 4. Obtener todos los productos
const getAllProducts = require('./getAllProductsHandler');
// 5. Obtener producto por id
const getProductById = require('./getProductByIdHandler');
// 8. Destruir producto (borrar de la base de datos) (no usar)
const destroyProduct = require('./destroyProductHandler');


const ProductsHandlers = {
    createProduct,
    editProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    destroyProduct,
};

module.exports = ProductsHandlers;
