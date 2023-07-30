// 1. Obtener todas las categorias
const getCategories = require('./getCategoriesController');
// 2. Crear categoría
const createCategories = require('./createCategoriesController');


const CategoriesControllers = {
    getCategories,
    createCategories
};

module.exports = CategoriesControllers;
