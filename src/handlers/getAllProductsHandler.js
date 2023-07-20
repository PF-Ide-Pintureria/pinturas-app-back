const { filterProductsController } = require('../controllers');


const getAllProductsHandler = async (req, res) => {
    try {
        // parámetros de búsqueda: nombre, precio (límite inferior y superior),
        // categoría
        const { name, category, lowPrice, highPrice } = req.query;
        const filteredProducts = await filterProductsController(
            name, category, lowPrice, highPrice
        );
        return res.status(200).json({
            "status": "success",
            "products": filteredProducts
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = getAllProductsHandler;
