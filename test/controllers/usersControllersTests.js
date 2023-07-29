const { expect, } = require('chai');
const { it, describe, before, after } = require('mocha');
const { Users } = require('../../src/db');
const { UsersControllers } = require('../../src/controllers');


const generateRandomEmail = () => {
    return Math.random().toString(36).substring(2, 15) + '@gmail.com';
};

const testUser = {
    name: "Test user",
    password: "Prueba-1234567@.",
    email: generateRandomEmail(),
    rol: "client",
};

const usersControllersTests = () => {

    let userForTest;

    before(async () => {
        await Users.sync({ alter: true });
    });

    describe('Create user controller', () => {

        it('Should register an user', async () => {
            userForTest = await UsersControllers.registerUser(testUser);
            expect(userForTest).to.not.be.null;
            expect(userForTest).to.have.property('idUser');
        });

    });

    after(async () => {
        await Users.destroy({
            where: { idUser: userForTest.idUser },
        });
    });

};


module.exports = usersControllersTests;
