const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const fs = require('fs');
const path = require('path');


const dataBaseUrl = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
const sequelize = new Sequelize(dataBaseUrl, {
    // set to console.log to see the raw SQL queries
    logging: false,
    // lets Sequelize know we can use pg-native for ~30% more speed
    native: false,
    ssl: {
        rejectUnauthorized: false,
        require: true,
    }
});
const basename = path.basename(__filename);
const modelDefiners = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al
// arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js')
    ).forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase()
    + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
