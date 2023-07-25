// Init router
const { Router } = require('express');
// Bring Routers
const productsRoutes = require('./productsRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const usersRoutes = require('./usersRoutes');

const router = Router();

// 1. GET /
// Here we will render the home page, which will be a description of the API
const description = {
    "name": "FADEPA Pinturas App Products Backend API",
    "version": "1.0.0",
    "description":
        "This is the backend API for the FADEPA Pinturas App Products",
    "repository": {
        "type": "git",
        "url": "https://github.com/PF-Ide-Pintureria/pinturas-app-back"
    },
    "routes": {
        "products": {
            "getAllProducts": {
                "method": "GET",
                "url": "/products",
                "description": "Get all products"
            },
            "getProductById": {
                "method": "GET",
                "url": "/products/details/:id",
                "description": "Get product by id"
            },
            "editProduct": {
                "method": "PUT",
                "url": "/products/:id",
                "description": "Edit product"
            },
            "deleteProduct": {
                "method": "DELETE",
                "url": "/products/:id",
                "description": "Delete product"
            },
            "createProduct": {
                "method": "POST",
                "url": "/products",
                "description": "Create product"
            },
        },
        "categories": {
            "getCategories": {
                "method": "GET",
                "url": "/categories",
                "description": "Get all categories"
            },
        },
        "users": {
            "registerUser": {
                "method": "POST",
                "url": "/users/register",
                "description": "Register user"
            },
        },
    },
};

// Use a middleware to render the description and load files from the public
// folder
router.get('/', (req, res) => {
    return res.json(description);
});

// Categories routes
router.use('/categories', categoriesRoutes);
// Products routes
router.use('/products', productsRoutes);
// Users routes
router.use('/users', usersRoutes);

module.exports = router;
