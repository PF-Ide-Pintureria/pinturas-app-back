const { Products } = require('../db.js');

const createProductController = (product) => {
    return Products.findOrCreate({
        where: {
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            patent: product.patent,
            price: product.price,
            color: product.color,
            package: product.package,
            stock: product.stock
        },
    });
};

module.exports = createProductController;
