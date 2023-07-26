const { Products } = require('../../db.js');
const producstFromJSON = require('../../utils/products.json');


const uploadFromJSONController = async () => {
    producstFromJSON.forEach(async (product) => {
        await Products.findOrCreate({
            where: {
                ...product,
            },
        });
    });
    console.log('Products created!');
};


module.exports = uploadFromJSONController;
