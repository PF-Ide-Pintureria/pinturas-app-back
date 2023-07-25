const { conn } = require('../src/db.js');

// Conexión a la base de datos
describe('DATABASE CONNECTIONS', () => {
    it('Should connect to the main database', (done) => {
        conn.authenticate().then(() => {
            done();
            conn.close();
        }).catch((err) => {
            done(err);
        });
    });
});
