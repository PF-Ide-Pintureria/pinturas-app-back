const { CategoriesControllers } = require('../../controllers');
const { getCategoriesController } = CategoriesControllers;


const getCategoriesHandler = async (req, res) => {
    try {
        const categories = await getCategoriesController();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = getCategoriesHandler;
