const { Users } = require('../../db');


const getUsersController = () => {
    return Users.findAll();
};


module.exports = getUsersController;
