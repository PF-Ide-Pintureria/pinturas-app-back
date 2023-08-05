const { ReviewsControllers } = require("../../controllers");
const { getReviewById } = ReviewsControllers;

const getReviewByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await getReviewById(id);

    if (!review)
      return res.status(404).json({
        status: "fail",
        message: "Review no encontrado",
      });

    return res.status(200).json({
      status: "success",
      product: review,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getReviewByIdHandler;
