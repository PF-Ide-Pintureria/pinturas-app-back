const { Orders } = require("../../db.js");

const editOrderController = async (id, order) => {
  // Buscar la orden por su ID en la base de datos
  const orderToEdit = await Orders.findByPk(id);

  if (!orderToEdit) throw Error("ORDEN NO ENCONTRADA");

  await orderToEdit.update(order);
  return orderToEdit;
};

module.exports = editOrderController;
