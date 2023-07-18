const { Router } = require('express');
const router = Router();
const { getAllProductsHandler,
    getCategoriesHandler, createProductHandler } = require('../handlers/');

router.get('/products', getAllProductsHandler);
router.get('/categories', getCategoriesHandler);
router.post('/products', createProductHandler);

module.exports = router;
