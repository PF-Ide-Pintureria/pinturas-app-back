const { ReviewsControllers } = require("../../controllers");
const { editReview } = ReviewsControllers;

const editReviewHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await editReview(id, req.body);

    return res.status(201).json({
      status: "success",
      message: "Review editado exitosamente",
      product: review,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = editReviewHandler;
