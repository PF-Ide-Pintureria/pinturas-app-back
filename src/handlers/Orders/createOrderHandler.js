const { OrdersControllers } = require("../../controllers");
const { createOrder } = OrdersControllers;

const createOrderHandler = async (req, res) => {
    try {
        const { products, idUser } = req.body;
        const result = await createOrder(products, idUser);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createOrderHandler;
