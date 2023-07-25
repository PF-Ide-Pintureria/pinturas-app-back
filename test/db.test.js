const { conn } = require('../src/db.js');

// Conexión a la base de datos
describe('Database connection', () => {
    it('Should connect to the database', (done) => {
        conn.authenticate().then(() => {
            done();
            conn.close();
        }).catch((err) => {
            done(err);
        });
    });
});
