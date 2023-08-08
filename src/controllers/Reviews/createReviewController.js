const { Reviews, Orders } = require("../../db.js");

const createReviewController = async ({description, rating, orderId}) => {
  console.log(orderId);
  // orderId='c21af915-ba4c-4fca-bbdf-28e468822629'
  const order = await Orders.findByPk(orderId);

  if(!order) throw Error ('ORDEN NO ENCONTRADA');

  const newReview = await Reviews.create({description, rating});
  
  await order.setReview(newReview);

  return await Reviews.findByPk(newReview.id)
};

module.exports = createReviewController;
