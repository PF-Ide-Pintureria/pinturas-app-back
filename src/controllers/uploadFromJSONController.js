const { Products } = require('../db.js');
const producstFromJSON = require('../utils/products.json');

const uploadFromJSONController = async () => {
    producstFromJSON.forEach(async (product) => {
        await Products.findOrCreate({
            where: {
                name: product.name,
                price: product.price,
                category: product.category,
                image: product.image,
                patent: product.patent
            },
        });
        // console.log('Product created');
    });
    console.log('Products created');
};

module.exports = uploadFromJSONController;
