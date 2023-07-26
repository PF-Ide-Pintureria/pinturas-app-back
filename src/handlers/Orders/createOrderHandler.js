const { OrdersControllers } = require("../../controllers");
const { createOrder } = OrdersControllers;

const createOrderHandler = async (req, res) => {
    try {
        const result = await createOrder();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createOrderHandler;
