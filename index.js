// const https = require('https');
// const fs = require('fs');

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const { NODE_PORT } = process.env;


// const httpsServer = https.createServer({
//     key: fs.readFileSync('./localhost-key.pem'),
//     cert: fs.readFileSync('./localhost.pem'),
// }, server);


// Syncing all the models at once.
conn.sync({ alter: false }).then(() => {

    server.listen(NODE_PORT, "0.0.0.0", async () => {
        // eslint-disable-next-line no-console
        console.log(`Server listening on port ${NODE_PORT}`);
    });

    // httpsServer.listen(NODE_PORT, () => {
    //     console.log(`HTTPS Server listening on port ${NODE_PORT}`);
    // });

});
