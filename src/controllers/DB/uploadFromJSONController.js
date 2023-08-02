const producstFromJSON = require('../../utils/products.json');
const createProduct = require('../../controllers/Products/createProductController');
const createCategories = require('../../controllers/Categories/createCategoriesController');


const uploadFromJSONController = async (
    createProducts = true, createCategoriesParam = true
) => {
    const categoriesCache = [];
    producstFromJSON.forEach(async (product) => {
        const productCategory = product.category;
        if (!categoriesCache.includes(productCategory)) {
            categoriesCache.push(productCategory);
        }
        createProducts && await createProduct(product);
    });
    createCategoriesParam && categoriesCache.map(async (category) => {
        await createCategories({
            name: category
        });
    });
    // console.log('Products and Categories created!');
    createProducts && console.log('Products created!');
    createCategoriesParam && console.log('Categories created!');
};


module.exports = uploadFromJSONController;
