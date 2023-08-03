const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { parsed: ENV } = require('dotenv').config();
const { NODE_PORT } = ENV || 3001;


// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
    server.listen(NODE_PORT, "0.0.0.0", async () => {
        // eslint-disable-next-line no-console
        console.log(`Server listening on port ${NODE_PORT}`);
    });
});
