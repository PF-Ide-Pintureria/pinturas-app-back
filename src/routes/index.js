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
