const multer = require("multer")
const { Router } = require('express');
const router = Router();
const { getAllProductsHandler,
    getCategoriesHandler,
    createProductHandler, deleteProductHandler } = require('../handlers/');

const storage = multer.diskStorage({

    destination: (req, res, cb) => {

        cb(null, "./src/assets/products")

    },
    filename: (req, file, cb) => {

        cb(null, "product-" + Date.now() + "-" + file.originalname)
    }
})

const productsUploads = multer({ storage })


router.get('/products', getAllProductsHandler);
router.get('/categories', getCategoriesHandler);
router.delete("/products/:id", deleteProductHandler);
//image es el nombre del field html por el cual se recibe el archivo
router.post('/products', [productsUploads.single("image")], createProductHandler);

module.exports = router;
