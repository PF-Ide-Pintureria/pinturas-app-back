const { Carts } = require('../../db');


const resetCartsController = () => {
    Carts.sync({ force: true }).then(
        () => console.log('Carritos actualizados correctamente!')
    ).catch(error => {
        console.log('Error al sincronizar el modelo de carritos:');
        console.error(error);
    })
};


module.exports = resetCartsController;
