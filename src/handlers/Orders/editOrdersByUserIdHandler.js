const { OrdersControllers } = require("../../controllers");
const { editOrder } = OrdersControllers;

const editOrderHandler = async (req, res) => {
  try {
    const order = await editOrder(Id, req.body);

    return res.status(201).json({
      status: "success",
      message: "Orden editada exitosamente",
      order: order,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = editOrderHandler;
