const { before, describe, it } = require('mocha');
const { expect } = require('chai');
const { Carts, Users } = require('../../src/db');
const { CartsControllers } = require('../../src/controllers');

function generateRandomEmail() {
    return Math.random().toString(36).substring(2, 15) + '@gmail.com';
}

let testUser = {
    name: "test user",
    password: "Prueba-1234567@.",
    email: generateRandomEmail(),
    rol: "client",
};

const cartsControllersTests = () => {

    let cart;
    let idUser;

    before(async () => {
        await Carts.sync({ alter: true });
        await Users.sync({ alter: true });
        const [user] = await Users.findOrCreate({
            where: { email: testUser.email },
            defaults: testUser,
        });
        idUser = user.id;
    });

    describe('Create cart controller', () => {

        it('Should create a empty cart', async () => {
            cart = await CartsControllers.createCart({ idUser });
            expect(cart).to.not.be.null;
            expect(cart).to.have.property('idCart');
            expect(cart).to.have.property('idUser');
        });

    });

    describe('Add Cart To User', () => { });

};


module.exports = cartsControllersTests;
