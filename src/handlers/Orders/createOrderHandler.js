const { OrdersControllers } = require("../../controllers");
const { createOrder } = OrdersControllers;

const createOrderHandler = async (req, res) => {
    try {
        const result = createOrder();
        return res.status(200).json({ result: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createOrderHandler;
