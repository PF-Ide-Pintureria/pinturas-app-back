// 1. Registrar usuario
const registerUser = require('./registerUserController');
// 2. Obtener usuarios
const getUsers = require('./getUsersController');


const UsersControllers = {
    registerUser,
    getUsers
};

module.exports = UsersControllers;
