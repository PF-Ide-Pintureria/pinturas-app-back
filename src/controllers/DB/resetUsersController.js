const { Users } = require('../../db');


const resetUsersController = () => {
    Users.sync({ force: true }).then(
        () => console.log('Usuarios actualizados correctamente!')
    ).catch(error => {
        console.log('Error al sincronizar el modelo de usuarios:');
        console.error(error);
    })
};

// resetUsersController();

module.exports = resetUsersController;
