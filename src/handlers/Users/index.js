// 1. Registrar usuario
const registerUser = require('./registerUserHandler');
// 2. Obtener usuarios
const getUsers = require('./getUsersHandler');


const UserHandlers = {
    registerUser,
    getUsers
};

module.exports = UserHandlers;
