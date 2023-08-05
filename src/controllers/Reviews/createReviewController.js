const { Reviews } = require("../../db.js");

const createReviewController = async (review) => {
  return Reviews.findOrCreate({
    where: {
      ...review,
    },
  });
};

module.exports = createReviewController;
