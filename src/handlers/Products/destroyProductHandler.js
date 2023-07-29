const { ProductsControllers } = require('../../controllers');
const { destroyProduct } = ProductsControllers;


const destroyProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await destroyProduct(id);
        return res.status(200).json({
            "status": "success",
            "product": product
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = destroyProductHandler;
