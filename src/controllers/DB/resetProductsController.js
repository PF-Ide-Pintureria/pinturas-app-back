const { Products, Categories } = require('../../db');
const uploadFromJSON = require('./uploadFromJSONController.js');


const resetAndUploadProducts = async () => {
    try {
        await Products.sync({ force: true });
        await Categories.sync({ force: true });
        await uploadFromJSON();
        console.log('Database reset successfully');
    } catch (error) {
        console.error(error);
    }
};

// resetAndUploadProducts();


module.exports = resetAndUploadProducts;
