const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const { PORT } = process.env || 3001;
const { uploadFromJSONController } = require('./src/controllers/');


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
    server.listen(PORT, "0.0.0.0", async () => {
        //await uploadFromJSONController();
        // eslint-disable-next-line no-console
        console.log(`Server listening on port ${PORT}`);
    });
});
