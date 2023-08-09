const { Reviews, Orders, Products } = require("../../db.js");


const createReviewController = async ({ orderId,
    description, rating, productsReviews }) => {

    const order = await Orders.findByPk(orderId);

    if (!order) throw Error('ORDEN NO ENCONTRADA');

    const review = await order.getReview();
    // if (review) {
    //     throw new Error('ESTA ORDEN YA TIENE UNA REVIEW');
    // }

    const newReview = await Reviews.create({ description, rating });

    // console.log({
    //     orderId,
    //     description, rating, productsReviews
    // });


    // Actualizamos el rating de los productos
    await Promise.all(productsReviews.map(async (productReview) => {
        const parsedProductReview = JSON.parse(productReview);
        const { id, rating } = parsedProductReview;
        const product = await Products.findByPk(id);
        const productRating = product.rating || 0;
        const productRatingCount = product.nroReviews;
        const num = (parseInt(productRating) * parseInt(productRatingCount) + parseInt(rating));
        const den = (productRatingCount + 1);
        const newProductRating = num / den;
        const roundRating = Math.floor(newProductRating);
        // if(roundRating > 5) throw new Error('El rating no puede ser mayor a
        // 5');
        // console.log(`Este producto tiene ${productRatingCount} reviews`);
        // console.log(`El rating del producto es ${productRating}`);
        // console.log(`El nuevo rating del producto es ${newProductRating}`);
        // console.log(`El nuevo rating del producto redondeado es ${roundRating}`);
        // console.log('roundRating', roundRating);
        await product.update({
            rating: roundRating,
            nroReviews: productRatingCount + 1
        });
    }));

    await order.setReview(newReview);

    return await Reviews.findByPk(newReview.id);
};


module.exports = createReviewController;
