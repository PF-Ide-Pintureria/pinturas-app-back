// 1. Crear Producto
const createProduct = require('./createProductController');
// 2. Editar Producto
const editProduct = require('./editProductController');
// 3. Eliminar Producto
const deleteProduct = require('./deleteProductController');
// 4. Obtener todos los productos
const getAllProducts = require('./getAllProductsController');
// 5. Obtener producto por id
const getProductById = require('./getProductByIdController');
// 6. Obtener producto por nombre
const getProductByName = require('./getProductByNameController');
// 7. Destruir producto (borrar de la base de datos) (no usar)
const destroyProduct = require('./destroyProductController');
// 8. Filtrar y ordenar productos
const filterAndOrderProducts = require('./filterAndOrderProductsController');


const ProductsControllers = {
    createProduct,
    editProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    getProductByName,
    destroyProduct,
    filterAndOrderProducts,
};

module.exports = ProductsControllers;
