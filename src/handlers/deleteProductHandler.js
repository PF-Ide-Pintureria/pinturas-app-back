const { deleteProductController } = require("../controllers");


const deleteProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteProductController(id);

        return res.status(200).json({
            "status": "success",
            "productDELETED": deleteProductController
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = deleteProductHandler;
