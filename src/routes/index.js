const {
    getAllProductsHandler,
    getCategoriesHandler,
    createProductHandler,
    deleteProductHandler,
    editProductHandler,
    getProductByIdHandler,
    destroyProductHandler,
} = require('../handlers/');
const { Router } = require('express');
const router = Router();
const { productsUploads, rateLimiter } = require('../middlewares/');


router.use(rateLimiter);
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
