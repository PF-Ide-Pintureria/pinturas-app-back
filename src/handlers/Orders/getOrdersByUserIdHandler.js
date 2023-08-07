const { OrdersControllers } = require("../../controllers");
const { getOrdersByUserId } = OrdersControllers;

const getOrdersByUserIdHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) return res.status(404).json({ error: "bad request" });

        const orders = await getOrdersByUserId(userId);
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getOrdersByUserIdHandler;
