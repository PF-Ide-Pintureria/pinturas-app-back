const { Products } = require('../db.js');

const createProductController = (product) => {
    return Products.findOrCreate({
        where: {
            ...product,
        },
    });
};

module.exports = createProductController;
