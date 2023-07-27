// 1. Registrar usuario
const registerUser = require('./registerUserController');
// 2. Obtener usuarios
const getUsers = require('./getUsersController');
// 3. Login usuario
const loginUsers = require('./loginUserController');

const UsersControllers = {
    registerUser,
    getUsers,
    loginUsers
};

module.exports = UsersControllers;
