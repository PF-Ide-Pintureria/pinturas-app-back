// Init router
const { Router } = require('express');
// Bring Routers
const productsRoutes = require('./productsRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const usersRoutes = require('./usersRoutes');

const router = Router();

// Categories routes
router.use('/categories', categoriesRoutes);
// Products routes
router.use('/products', productsRoutes);
// Users routes
router.use('/users', usersRoutes);

module.exports = router;
