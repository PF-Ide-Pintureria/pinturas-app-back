const { Router } = require('express');
const { ProductsHandlers } = require('../handlers/');
const { productsUploads, } = require('../middlewares/');

const router = Router();

// 1. GET /products
router.get('/', ProductsHandlers.getAllProducts);

// 2. GET /details/:id
router.get('/details/:id', ProductsHandlers.getProductById);

// 3. PUT /products/:id
router.put("/:id", [productsUploads.single("image")], ProductsHandlers.editProduct);

// 4. DELETE /products/:id
router.delete("/:id", ProductsHandlers.deleteProduct);

// 5. POST /products
router.post('/', [productsUploads.single("image")], ProductsHandlers.createProduct);

// 6. DESTROY /products/destroy/:id
router.delete("/destroy/:id", ProductsHandlers.destroyProduct);

module.exports = router;
