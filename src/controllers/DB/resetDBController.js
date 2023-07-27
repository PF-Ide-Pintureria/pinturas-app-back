const { conn } = require('../../db.js');
const uploadFromJSON = require('./uploadFromJSONController');


const resetDBController = async () => {
    try {
        await conn.sync({ force: true });
        await uploadFromJSON();
        console.log('Database reset successfully');
    } catch (error) {
        console.error(error);
    };
};

resetDBController();


module.exports = resetDBController;
