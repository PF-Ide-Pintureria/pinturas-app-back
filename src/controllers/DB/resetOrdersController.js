const { Orders } = require('../../db');


const resetOrdersController = async () => {

    try {
        Orders.sync({ force: true });
        return 'Ordenes actualizadas correctamente!';
    } catch (error) {
        return error;
    }

};


const result = resetOrdersController();
console.log(result);

module.exports = resetOrdersController;
