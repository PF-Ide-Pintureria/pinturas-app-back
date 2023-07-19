const { Router } = require('express');
const router = Router();
const { getAllProductsHandler,
    getCategoriesHandler, createProductHandler, deleteProductHandler } = require('../handlers/');

router.get('/products', getAllProductsHandler);
router.get('/categories', getCategoriesHandler);
router.post('/products', createProductHandler);
router.delete("/products/:id", deleteProductHandler);
module.exports = router;
