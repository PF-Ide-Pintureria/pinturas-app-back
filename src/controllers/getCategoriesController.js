const { Products } = require('../db.js');

const getCategoriesController = async () => {
    const categoriesResults = await Products.findAll({
        attributes: ['category'],
        group: ['category'],
    });
    const categories = categoriesResults.map((category) =>
        category.dataValues.category);
    return categories;
};

module.exports = getCategoriesController;
