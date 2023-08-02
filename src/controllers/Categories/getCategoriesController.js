// const { Products } = require('../../db.js');
const { Categories } = require('../../db');


const getCategoriesController = async () => {
    // const categoriesResults = await Products.findAll({
    //     attributes: ['category'],
    //     group: ['category'],
    // });
    const categoriesResults = await Categories.findAll();
    const categories = categoriesResults.map((category) =>
        category.name);
    return categories;
};


module.exports = getCategoriesController;
