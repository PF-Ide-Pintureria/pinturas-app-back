const { CategoriesControllers } = require('../../controllers');
const { getCategories } = CategoriesControllers;


const getCategoriesHandler = async (req, res) => {
    try {
        const categories = await getCategories();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getCategoriesHandler;
