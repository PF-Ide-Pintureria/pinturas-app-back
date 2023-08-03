const { Orders } = require('../../db');


const resetOrdersController = async () => {

    try {
        await Orders.sync({ force: true });
        console.log("Ordenes actualizadas (:");
    } catch (error) {
        console.error(error);
    }
};

// const result = resetOrdersController();
// console.log(result);

module.exports = resetOrdersController;
