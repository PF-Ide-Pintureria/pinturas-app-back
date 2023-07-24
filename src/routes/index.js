const {
    getAllProductsHandler,
    getCategoriesHandler,
    createProductHandler,
    deleteProductHandler,
    editProductHandler,
    getProductByIdHandler,
    destroyProductHandler,
} = require('../handlers/');
const { productsUploads, } = require('../middlewares/');
const { Router } = require('express');

const router = Router();

// Default message for root path
const routesDescription = {
    '/': 'Welcome to the API',
    '/products': 'Get all products',
    '/categories': 'Get all categories',
    '/details/:id': 'Get product by id',
    '/products/:id': 'Edit product by id',
    '/products': 'Create product',
    '/products/:id': 'Delete product by id',
};
router.get('/', (req, res) => {
    return res.json(routesDescription);
});

router.get('/products', getAllProductsHandler);
router.get('/categories', getCategoriesHandler);
router.get('/details/:id', getProductByIdHandler);
router.put("/products/:id", [productsUploads.single("image")],
    editProductHandler);
router.post('/products', [productsUploads.single("image")],
    createProductHandler);
router.delete("/products/:id", deleteProductHandler);
router.delete("/products/destroy/:id", destroyProductHandler);


module.exports = router;
