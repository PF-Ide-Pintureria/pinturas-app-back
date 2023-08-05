const { Reviews } = require("../../db.js");

const getReviewByIdController = async (id) => {
  const review = await Reviews.findByPk(id);
  return review;
};

module.exports = getReviewByIdController;
