const { Products } = require('../src/db');
const { ProductsControllers } = require('../src/controllers');
const { uploadImage } = ProductsControllers;


Products.findAll().then(products => {
    products.forEach(product => {
        const { idProduct } = product;
        uploadImage(idProduct);
    });
});
