const { ReviewsControllers } = require("../../controllers");
const { getAllReviews } = ReviewsControllers;


const getAllReviewsHandler = async (req, res) => {
    try {
        const { userId, orderId } = req.query;
        const reviews = await getAllReviews({
            userId, orderId
        });
        return res.status(200).json(reviews);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = getAllReviewsHandler;
