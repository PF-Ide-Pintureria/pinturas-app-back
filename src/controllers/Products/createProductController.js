const { Products } = require('../../db.js');

const createProductController = async (product) => {
    return Products.findOrCreate({
        where: {
            ...product,
        },
    });
};

module.exports = createProductController;
