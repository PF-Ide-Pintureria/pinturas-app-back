const { describe, before, } = require('mocha');
const { conn, } = require('../../src/db.js');


const productsTests = require('./productsControllersTests');
const categoriesTests = require('./categoriesControllersTests');
const cartsTests = require('./cartsControllersTests');
const usersTests = require('./usersControllersTests');



describe('CONTROLLERS', () => {

    // Conexión a la base de datos
    before(() => conn.authenticate().then(() => {
        conn.sync({ force: false });
    }).catch((err) => {
        console.error('Unable to connect to the database:', err);
    }));

    describe('[Products controllers]', () => { productsTests(); });

    describe('[Categories controllers]', () => { categoriesTests(); });

    describe('[Carts Controllers]', () => { cartsTests(); });

    describe('[Users Controllers]', () => { usersTests(); });

});
