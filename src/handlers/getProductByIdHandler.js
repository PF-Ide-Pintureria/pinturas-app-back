const { getProductByIdController } = require('../controllers/');


const getProductByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProductByIdController(id);

        return res.status(200).json({
            "status": "success",
            "product": product
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    };
};

module.exports = getProductByIdHandler;
