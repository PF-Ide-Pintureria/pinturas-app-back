// 1. Registrar usuario
const registerUser = require('./registerUserHandler');
// 2. Obtener usuarios
const getUsers = require('./getUsersHandler');
// 3. Login usuario
const loginUsers = require('./loginUserHandler');


const UserHandlers = {
    registerUser,
    getUsers,
    loginUsers
};

module.exports = UserHandlers;
