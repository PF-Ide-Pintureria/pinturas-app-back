const {Users} = require('../db');

const registerUserController = async (email, password, rol) => {

  const newUser = await Users.create({
        
    email,
    password,
    rol

  });

   return newUser
   
}

module.exports = registerUserController;