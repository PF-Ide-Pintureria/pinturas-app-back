const { filterAndOrderProductsController } = require('../controllers');


const getAllProductsHandler = async (req, res) => {
    try {
        // parámetros de búsqueda: nombre, precio (límite inferior y superior),
        // categoría
        const {
            name, category,
            lowPrice, highPrice,
            minRating, maxRating,
            minStock, maxStock,
            limit, page,
            color, active,
            sortBy, orderBy,
        } = req.query;
        const filteredProducts = await filterAndOrderProductsController(
            name, category,
            lowPrice, highPrice,
            minRating, maxRating,
            minStock, maxStock,
            limit, page,
            color, active,
            sortBy, orderBy,
        );
        return res.status(200).json(filteredProducts);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = getAllProductsHandler;
