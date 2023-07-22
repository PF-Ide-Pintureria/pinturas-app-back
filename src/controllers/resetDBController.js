const { conn } = require('../db.js');
const { uploadFromJSONController } = require('./');

const resetDBController = async () => {
    try {
        await conn.sync({ force: true });
        await uploadFromJSONController();
        console.log('Database reset successfully');
    } catch (error) {
        console.error(error);
    };
};


resetDBController();
