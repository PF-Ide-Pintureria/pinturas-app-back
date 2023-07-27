require('dotenv').config();


const logKeys = () => {

    const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

    console.log('DB Credentials:\n');
    console.log(`DB_USER: ${DB_USER}`);
    console.log(`DB_PASS: ${DB_PASS}`);
    console.log(`DB_HOST: ${DB_HOST}`);
    console.log(`DB_NAME: ${DB_NAME}`);
    console.log('\n');

    const { CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

    console.log('Cloudinary Credentials:\n');
    console.log(`CLOUD_NAME: ${CLOUD_NAME}`);
    console.log(`CLOUDINARY_KEY: ${CLOUDINARY_KEY}`);
    console.log(`CLOUDINARY_SECRET: ${CLOUDINARY_SECRET}`);

    const { DB_TEST_USER, DB_TEST_PASS, DB_TEST_HOST, DB_TEST_NAME } = process.env;

    console.log('Testing DB Credentials:\n');
    console.log(`DB_TEST_USER: ${DB_TEST_USER}`);
    console.log(`DB_TEST_PASS: ${DB_TEST_PASS}`);
    console.log(`DB_TEST_HOST: ${DB_TEST_HOST}`);
    console.log(`DB_TEST_NAME: ${DB_TEST_NAME}`);
    console.log('\n');

    const { ACCESS_TOKEN, SENDER_EMAIL, APPLICATION_PASSWORD } = process.env;

    console.log('Email Credentials:\n');
    console.log(`ACCESS_TOKEN: ${ACCESS_TOKEN}`);
    console.log(`SENDER_EMAIL: ${SENDER_EMAIL}`);
    console.log(`APPLICATION_PASSWORD: ${APPLICATION_PASSWORD}`);

};

module.exports = logKeys;
