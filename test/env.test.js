require('dotenv').config();


// Verifica que las variables de entorno estén definidas
describe('ENVIRONMENT VARIABLES', () => {

    // Verifica que la variables de entorno para la
    // conexión a la base de datos estén definidas
    describe('[Database keys]', () => {

        // eslint-disable-next-line no-undef
        const { DB_NAME, DB_HOST, DB_USER, DB_PASS } = process.env;

        it('', () => {
            expect(DB_NAME).to.not.be.undefined;
        });

        it('', () => {
            expect(DB_HOST).to.not.be.undefined;
        });

        it('', () => {
            expect(DB_USER).to.not.be.undefined;
        });

        it('', () => {
            expect(DB_PASS).to.not.be.undefined;
        });

    });

    // Verifica que la variables de entorno para la
    // conexión a Cloudinary estén definidas
    describe('[Cloudinary keys]', () => {

        // eslint-disable-next-line no-undef
        const { CLOUD_NAME, CLOUD_KEY, CLOUD_SECRET } = process.env;

        it('', () => {
            expect(CLOUD_NAME).to.not.be.undefined;
        });

        it('', () => {
            expect(CLOUD_KEY).to.not.be.undefined;
        });

        it('', () => {
            expect(CLOUD_SECRET).to.not.be.undefined;
        });

    });

    // Verifica que la variables de entorno para la
    // conexión a DB de testing estén definidas
    describe('[Testing database keys]', () => {

        const {
            DB_TEST_NAME, DB_TEST_HOST,
            DB_TEST_USER, DB_TEST_PASS
        } = process.env; // eslint-disable-line no-undef

        it('', () => {
            expect(DB_TEST_NAME).to.not.be.undefined;
        });

        it('', () => {
            expect(DB_TEST_HOST).to.not.be.undefined;
        });

        it('', () => {
            expect(DB_TEST_USER).to.not.be.undefined;
        });

        it('', () => {
            expect(DB_TEST_PASS).to.not.be.undefined;
        });

    });

    // Nodemailer
    describe('[Nodemailer keys]', () => {

        // eslint-disable-next-line no-undef
        const { SENDER_MAIL, SENDER_PASS } = process.env;

        it('', () => {
            expect(SENDER_MAIL).to.not.be.undefined;
        });

        it('', () => {
            expect(SENDER_PASS).to.not.be.undefined;
        });

    });

    // JWT
    describe('[JWT keys]', () => {

        // eslint-disable-next-line no-undef
        const { JWT_SECRET } = process.env;

        it('', () => {
            expect(JWT_SECRET).to.not.be.undefined;
        });

    });

    // MercadoPago
    describe('[MercadoPago keys]', () => {

        // eslint-disable-next-line no-undef
        const { MELI_ACCESS_TOKEN } = process.env;

        it('', () => {
            expect(MELI_ACCESS_TOKEN).to.not.be.undefined;
        });

    });

    after(() => {
        console.log('You got the keys!');
    });

});
