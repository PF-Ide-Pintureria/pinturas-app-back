const { expect } = require('chai');
const { Orders, Users } = require('../../src/db');
const { v4 } = require('uuid');


const generateRandomEmail = () => {

    return Math.random().toString(36).substring(2, 15) + '@gmail.com';

};

const testUser = {

    name: "Test user",
    email: generateRandomEmail(),
    password: "Prueba-1234567@.",
    rol: "client",

};

const ordersModelTests = async () => {

    let userForTest;
    let orderForTest;
    let producstForTest;

    before(async () => {
        await Orders.sync({ alter: true });
        await Users.sync({ alter: true });
        userForTest = await Users.create(testUser);
    });

    it('Should create an order with empty products', () => {

        orderForTest = Orders.build({
            idUser: userForTest.idUser,
            products: [],
        });

        // console.log({
        //     idUser: order.idUser,
        //     idOrder: order.idOrder,
        //     products: order.products,
        // });

        expect(orderForTest).to.not.be.null;
        expect(orderForTest).to.have.property('userId');
        expect(orderForTest).to.have.property('products');

    });

    it('Should create an order with products', async () => {

        const randomLength = Math.floor(Math.random() * 10) + 1;
        producstForTest = Array.from({ length: randomLength }, () => {
            return {
                idProduct: v4(),
                quantity: Math.floor(Math.random() * 10) + 1,
            };
        });

        orderForTest = Orders.build({
            idUser: userForTest.idUser,
            products: producstForTest,
        });

        // console.log({
        //     idUser: orderForTest.idUser,
        //     idOrder: orderForTest.idOrder,
        //     products: orderForTest.products,
        // });

        expect(orderForTest).to.not.be.null;
        expect(orderForTest).to.have.property('userId');
        expect(orderForTest).to.have.property('products');
        expect(orderForTest.products).to.have.lengthOf(producstForTest.length);

        // Check ids of products
        orderForTest.products.forEach((product, index) => {
            expect(product).to.have.property('idProduct');
            expect(product.idProduct).to.be.equal(
                producstForTest[index].idProduct);
        });

    });

    after(async () => {
        await Orders.destroy({ where: { idOrder: orderForTest.idOrder } });
        await Users.destroy({ where: { email: userForTest.email } });
    });

};

module.exports = ordersModelTests;
