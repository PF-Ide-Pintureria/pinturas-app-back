const { Reviews } = require("../../db.js");

const editReviewController = async (id, review) => {
  // Buscar el review por su ID en la base de datos
  const reviewToEdit = await Reviews.findByPk(id);

  if (!reviewToEdit) throw Error("REVIEW NO ENCONTRADO");

  await reviewToEdit.update(review);
  return reviewToEdit;
};

module.exports = editReviewController;
