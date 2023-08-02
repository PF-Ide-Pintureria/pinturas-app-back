const { ProductsControllers } = require('../../controllers');
const { getAllProducts } = ProductsControllers;


const getAllProductsNoFilterHandler = async (req, res) => {

    try {

       const productsNoFilter = await getAllProducts();

        return res.status(200).json(productsNoFilter);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = getAllProductsNoFilterHandler;