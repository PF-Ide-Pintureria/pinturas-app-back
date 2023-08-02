const { Products, Categories } = require('../../db');
const uploadFromJSON = require('./uploadFromJSONController.js');


const resetAndUploadProducts =
    async (resetProducts = true, resetCategories = true) => {
        try {
            resetProducts && await Products.sync({ force: true });
            resetCategories && await Categories.sync({ force: true });
            await uploadFromJSON(resetProducts, resetCategories);
            console.log('Database reset successfully');
        } catch (error) {
            console.error(error);
        }
    };

// resetAndUploadProducts();


module.exports = resetAndUploadProducts;
