require('dotenv').config();
const { expect } = require('chai');


// Verifica que las variables de entorno estén definidas
describe('ENVIRONMENT VARIABLES', () => {

    // Verifica que la variables de entorno para la
    // conexión a la base de datos estén definidas
    describe('[Database keys]', () => {

        it('Should have a DB_NAME key', () => {
            expect(process.env.DB_NAME).to.not.be.undefined;
        });

        it('Should have a DB_HOST key', () => {
            expect(process.env.DB_HOST).to.not.be.undefined;
        });

        it('Should have a DB_USER key', () => {
            expect(process.env.DB_USER).to.not.be.undefined;
        });

        it('Should have a DB_PASSWORD key', () => {
            expect(process.env.DB_PASS).to.not.be.undefined;
        });

    });

    // Verifica que la variables de entorno para la
    // conexión a Cloudinary estén definidas
    describe('[Cloudinary keys]', () => {

        it('Should have a CLOUD_NAME key', () => {
            expect(process.env.CLOUD_NAME).to.not.be.undefined;
        });

        it('Should have a CLOUD_KEY key', () => {
            expect(process.env.CLOUD_KEY).to.not.be.undefined;
        });

        it('Should have a CLOUD_SECRET key', () => {
            expect(process.env.CLOUD_SECRET).to.not.be.undefined;
        });

    });

    // Verifica que la variables de entorno para la
    // conexión a DB de testing estén definidas
    describe('[Testing database ke]ys', () => {

        it('Should have a DB_TEST_NAME key', () => {
            expect(process.env.DB_TEST_NAME).to.not.be.undefined;
        });

        it('Should have a DB_TEST_HOST key', () => {
            expect(process.env.DB_TEST_HOST).to.not.be.undefined;
        });

        it('Should have a DB_TEST_USER key', () => {
            expect(process.env.DB_TEST_USER).to.not.be.undefined;
        });

        it('Should have a DB_TEST_PASSWORD key', () => {
            expect(process.env.DB_TEST_PASS).to.not.be.undefined;
        });

    });

    // Nodemailer
    describe('[Nodemailer keys]', () => {

        it('Should have a NODEMAILER_USER key', () => {
            expect(process.env.SENDER_MAIL).to.not.be.undefined;
        });

        it('Should have a APPLICATION_PASSWORD key', () => {
            expect(process.env.SENDER_PASS).to.not.be.undefined;
        });

    });

    // JWT
    describe('[JWT keys]', () => {

        it('Should have a JWT_SECRET key', () => {
            expect(process.env.JWT_SECRET).to.not.be.undefined;
        });

    });

    // MercadoPago
    describe('[MercadoPago keys]', () => {

        it('Should have a MELI_ACCESS_TOKEN key', () => {
            expect(process.env.MELI_ACCESS_TOKEN).to.not.be.undefined;
        });

    });

    after(() => {
        console.log('You got the keys!');
    });

});
