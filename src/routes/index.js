const multer = require("multer");
const {
    getAllProductsHandler,
    getCategoriesHandler,
    createProductHandler,
    deleteProductHandler,
    editProductHandler,
    getProductByIdHandler,
} = require('../handlers/');
const { Router } = require('express');
const router = Router();


const storage = multer.diskStorage({

    destination: (req, res, cb) => {

        cb(null, "./src/assets/products");

    },
    filename: (req, file, cb) => {

        cb(null, "product-" + Date.now() + "-" + file.originalname);
    }
});

const productsUploads = multer({ storage });


router.get('/products', getAllProductsHandler);
router.get('/categories', getCategoriesHandler);
router.get('/details/:id', getProductByIdHandler);
router.put("/products/:id", [productsUploads.single("image")],
    editProductHandler);
//image es el nombre del field html por el cual se recibe el archivo;
router.post('/products', [productsUploads.single("image")],
    createProductHandler);
router.delete("/products/:id", deleteProductHandler);


module.exports = router;
