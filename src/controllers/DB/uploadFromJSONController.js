const producstFromJSON = require('../../utils/products.json');
const {
    ProductsControllers,
    CategoriesControllers
} = require('../../controllers/');


const uploadFromJSONController = async () => {
    const categoriesCache = [];
    producstFromJSON.forEach(async (product) => {
        const productCategory = product.category;
        if (!categoriesCache.includes(productCategory)) {
            categoriesCache.push(productCategory);
        }
        await ProductsControllers.createProduct(product);
    });
    categoriesCache.map(async (category) => {
        await CategoriesControllers.createCategories({
            name: category
        });
    });
    console.log('Products and Categories created!');
};


module.exports = uploadFromJSONController;
