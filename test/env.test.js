require('dotenv').config();
const { expect } = require('chai');
const { describe, it, after } = require('mocha');
let { parsed: ENV } = require('dotenv').config();


// Verifica que las variables de entorno estén definidas
describe('ENVIRONMENT VARIABLES', () => {

    // Verifica que la variables de entorno para la
    // conexión a la base de datos estén definidas
    describe('[Database keys]', () => {

        it('', () => {
            expect(ENV.DB_NAME).to.not.be.undefined;
        });

        it('', () => {
            expect(ENV.DB_HOST).to.not.be.undefined;
        });

        it('', () => {
            expect(ENV.DB_USER).to.not.be.undefined;
        });

        it('', () => {
            expect(ENV.DB_PASS).to.not.be.undefined;
        });

    });

    // Verifica que la variables de entorno para la
    // conexión a Cloudinary estén definidas
    describe('[Cloudinary keys]', () => {

        it('', () => {
            expect(ENV.CLOUD_NAME).to.not.be.undefined;
        });

        it('', () => {
            expect(ENV.CLOUD_KEY).to.not.be.undefined;
        });

        it('', () => {
            expect(ENV.CLOUD_SECRET).to.not.be.undefined;
        });

    });

    // Verifica que la variables de entorno para la
    // conexión a DB de testing estén definidas
    describe('[Testing database keys]', () => {

        it('', () => {
            expect(ENV.DB_TEST_NAME).to.not.be.undefined;
        });

        it('', () => {
            expect(ENV.DB_TEST_HOST).to.not.be.undefined;
        });

        it('', () => {
            expect(ENV.DB_TEST_USER).to.not.be.undefined;
        });

        it('', () => {
            expect(ENV.DB_TEST_PASS).to.not.be.undefined;
        });

    });

    // Nodemailer
    describe('[Nodemailer keys]', () => {

        it('', () => {
            expect(ENV.SENDER_MAIL).to.not.be.undefined;
        });

        it('', () => {
            expect(ENV.SENDER_PASS).to.not.be.undefined;
        });

    });

    // JWT
    describe('[JWT keys]', () => {

        it('', () => {
            expect(ENV.JWT_SECRET).to.not.be.undefined;
        });

    });

    // MercadoPago
    describe('[MercadoPago keys]', () => {

        it('', () => {
            expect(ENV.MELI_ACCESS_TOKEN).to.not.be.undefined;
        });

    });

    after(() => {
        console.log('You got the keys!');
    });

});
