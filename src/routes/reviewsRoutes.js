const { Router } = require("express");
const { ReviewsHandlers } = require("../handlers/");

const router = Router();

// 1. GET /reviews
router.get("/", ReviewsHandlers.getAllReviews);
// 2. POST /reviews/:id
router.post("/:id", ReviewsHandlers.createReviews);
// 3. PUT /reviews/:id
router.put("/:id", ReviewsHandlers.editReviews);
// 4. DELETE /reviews/:id
router.delete("/:id", ReviewsHandlers.deleteReviews);
// 5. GET /details/:id
router.get("/details/:id", ReviewsHandlers.getReviewsById);

module.exports = router;
