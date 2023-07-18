const { getAllProductsController,
    getProductByNameController } = require('../controllers');


const getAllProductsHandler = async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const products = await getProductByNameController(name);
            return res.status(200).json(products);
        };
        const allProducts = await getAllProductsController();
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = getAllProductsHandler;
