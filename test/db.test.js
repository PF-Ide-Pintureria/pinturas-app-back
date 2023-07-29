const { describe, it, before, xdescribe } = require('mocha');
const { expect } = require('chai');
const { conn, createDBInstance } = require('../src/db.js');
const { parsed: ENV } = require('dotenv').config();
const {
    DB_TEST_USER, DB_TEST_PASS,
    DB_TEST_HOST, DB_TEST_NAME
} = ENV;
const {
    DB_LOCAL_USER, DB_LOCAL_PASS,
    DB_LOCAL_HOST, DB_LOCAL_NAME
} = ENV;

// Conexiones a la bases de datos
describe('DATABASE CONNECTIONS', () => {

    describe('[Main Environment]', () => {

        it('Should connect to the main database', (done) => {
            conn.authenticate().then(() => {
                done();
                conn.close();
            }).catch((err) => {
                done(err);
            });
        });

    });

    xdescribe('[Testing Environment]', () => {

        let dbInstance;

        before(() => {
            dbInstance = createDBInstance(DB_TEST_USER, DB_TEST_PASS,
                DB_TEST_HOST, DB_TEST_NAME);

            expect(dbInstance).to.not.be.undefined;
        });

        it('Should connect to the testing database', (done) => {
            dbInstance.authenticate().then(() => {
                done();
                dbInstance.close();
            }).catch((err) => {
                done(err);
            });
        });

    });

    xdescribe('[Local Environment]', () => {

        let dbInstance;

        before(() => {
            dbInstance = createDBInstance(DB_LOCAL_USER, DB_LOCAL_PASS,
                DB_LOCAL_HOST, DB_LOCAL_NAME);

            expect(dbInstance).to.not.be.undefined;
        });

        it('Should connect to the local database', (done) => {
            dbInstance.authenticate().then(() => {
                done();
                dbInstance.close();
            }).catch((err) => {
                done(err);
            });
        });

    });

});
