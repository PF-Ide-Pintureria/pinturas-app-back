const { Reviews } = require("../../db.js");

const deleteReviewsController = async (id) => {
  // Buscar la review por su ID en la base de datos
  const review = await Reviews.findByPk(id);

  if (!review) throw Error("REVIEW NO ENCONTRADO");

  await review
    .update({ active: false })
    .then((reviewDeleted) => reviewDeleted)
    .catch((error) => {
      throw error;
    });
};

module.exports = deleteReviewsController;
