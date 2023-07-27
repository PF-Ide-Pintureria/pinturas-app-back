require('dotenv').config();
const { expect } = require('chai');
const logKeys = require('../src/utils/logKeys');

logKeys();

// Verifica que las variables de entorno estén definidas
describe('ENVIRONMENT VARIABLES', () => {

    // Verifica que la variables de entorno para la
    // conexión a la base de datos estén definidas
    describe('Database keys', () => {

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
    xdescribe('Cloudinary keys', () => {

        it('Should have a CLOUD_NAME key', () => {
            expect(process.env.CLOUD_NAME).to.not.be.undefined;
        });

        it('Should have a CLOUDINARY_KEY key', () => {
            expect(process.env.CLOUDINARY_KEY).to.not.be.undefined;
        });

        it('Should have a CLOUDINARY_SECRET key', () => {
            expect(process.env.CLOUDINARY_SECRET).to.not.be.undefined;
        });

    });

    // Verifica que la variables de entorno para la
    // conexión a DB de testing estén definidas
    xdescribe('Testing database keys', () => {

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

});
