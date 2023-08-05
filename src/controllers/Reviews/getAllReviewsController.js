const { Reviews } = require("../../db.js");

const getAllReviewsController = async () => {
  const dbReviewsResults = await Reviews.findAll();
  return dbReviewsResults.map((review) => review.dataValues);
};

module.exports = getAllReviewsController;
