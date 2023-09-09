const { Reviews } = require("../../db.js");


const getAllReviewsController = async ({ userId, orderId }) => {
    const condition = {};
    orderId && (condition.orderId = orderId);
    let reviews = await Reviews.findAll({
        where: condition, include: 'order',
    });
    // Filtramos por usuario
    let filteredReviews;
    if (userId) {
        filteredReviews = reviews.filter((review) => {
            const order = review.order || {};
            return String(order?.userId) === String(userId);
        });
        // return filteredReviews;
    }
    // Map to dataValues and remove order
    filteredReviews ? filteredReviews = filteredReviews.map((review) => {
        const { order, ...rest } = review.dataValues;
        order?.userId && (rest.userId = order.userId);
        return rest;
    }) : reviews = reviews.map((review) => {
        const { order, ...rest } = review.dataValues;
        order?.userId && (rest.userId = order.userId);
        return rest;
    });
    return filteredReviews || reviews;
};


module.exports = getAllReviewsController;
