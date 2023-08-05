const { ReviewsControllers } = require("../../controllers");
const { createReview } = ReviewsControllers;

const createReviewsHandler = async (req, res) => {
  try {
    const postReview = await createReview(req.body);

    return res.status(201).json({
      status: "success",
      message: "Review creado exitosamente",
      product: postReview,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createReviewsHandler;
