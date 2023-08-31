const { ProductsControllers } = require('../../controllers');
const { updatePrices } = ProductsControllers;

const updatePricesHandler = (req, res) => {

    const result = updatePrices();
    res.send(result);
};

module.exports = updatePricesHandler;
