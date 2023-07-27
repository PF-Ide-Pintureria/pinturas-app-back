const { Products } = require('../../db.js');
const uploadFromJSON = require('./uploadFromJSONController');


const resetDBController = async () => {
    try {
        await Products.sync({ force: true });
        await uploadFromJSON();
        console.log('Database reset successfully');
    } catch (error) {
        console.error(error);
    };
};

await resetDBController();


module.exports = resetDBController;
