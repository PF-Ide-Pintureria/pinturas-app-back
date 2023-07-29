const { ProductsControllers } = require('../../controllers');
const { deleteProduct } = ProductsControllers;


const deleteProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await deleteProduct(id);

        return res.status(200).json({
            "status": "success",
            "productDELETED": deletedProduct
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteProductHandler;
