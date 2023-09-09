const { ReviewsControllers } = require("../../controllers");
const { deleteReviews } = ReviewsControllers;

const deleteReviewsHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReviews = await deleteReviews(id);

    return res.status(200).json({
      status: "success",
      message: "Review borrado correctamente",
      reviewDELETED: deletedReviews,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteReviewsHandler;
