const { ProductsControllers } = require('../../controllers');
const { getProductById } = ProductsControllers;


const getProductByIdHandler = async (req, res) => {

    try {
        const { id } = req.params;
        const product = await getProductById(id);

        if (!product) return res.status(404).json({
            "status": "fail",
            "message": "Producto no encontrado"
        });

        return res.status(200).json({
            "status": "success",
            "product": product
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

};

module.exports = getProductByIdHandler;
