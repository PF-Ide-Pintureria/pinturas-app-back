const { Router } = require('express');
const { CategoriesHandlers } = require('../handlers/');

const router = Router();

// 1. GET /categories
router.get('/', CategoriesHandlers.getCategories);


module.exports = router;
