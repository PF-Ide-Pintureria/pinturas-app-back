const { Sequelize } = require('sequelize');
require('dotenv').config();
let { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const fs = require('fs');
const path = require('path');

let sequelize;
const { NODE_ENV } = process.env;
if (NODE_ENV === 'test') {
    const {
        DB_TEST_USER, DB_TEST_PASS,
        DB_TEST_HOST, DB_TEST_NAME
    } = process.env;
    createDBInstance(DB_TEST_USER, DB_TEST_PASS,
        DB_TEST_HOST, DB_TEST_NAME);
    console.log('[DB] TESTING ENVIRONMENT');
} else if (NODE_ENV === 'local') {
    const {
        DB_LOCAL_USER, DB_LOCAL_PASS,
        DB_LOCAL_HOST, DB_LOCAL_NAME
    } = process.env;
    createDBInstance(DB_LOCAL_USER, DB_LOCAL_PASS,
        DB_LOCAL_HOST, DB_LOCAL_NAME);
    console.log('[DB] LOCAL ENVIRONMENT');
} else {
    createDBInstance();
    console.log('[DB] DEPLOY ENVIRONMENT');
}

function createDBInstance(user = DB_USER, pass = DB_PASS,
    host = DB_HOST, name = DB_NAME) {
    let dataBaseUrl = `postgres://${user}:${pass}@${host}/${name}`;
    try {
        sequelize = new Sequelize(dataBaseUrl, {
            // set to console.log to see the raw SQL queries
            logging: false,
            // lets Sequelize know we can use pg-native for ~30% more speed
            native: false,
            ssl: {
                rejectUnauthorized: false,
                require: true,
            }
        });
    }
    catch (error) {
        console.log('Error al cargar la base de datos :(');
        console.error(error);
    }
}


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

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Blogs, Products, Reviews, Users } = sequelize.models;

// Aca vendrian las relaciones:
//FAVORITOS
// un usuario puede tener muchos productos favoritos y un producto puede ser favorito para muchos usuarios.
Users.belongsToMany(Products, { through: "favorite_products" });
Products.belongsToMany(Users, { through: "favorite_products" });
//BLOGS
//un usuario puede tener varios blogs, pero cada blog pertenece a un único usuario
Users.hasMany(Blogs);
Blogs.belongsTo(Users);
//REVIEWS
//un usuario puede realizar muchas reseñas pero cada reseña esta asociada a un unico producto
Users.hasMany(Reviews);
Reviews.belongsTo(Users);

Products.hasMany(Reviews);
Reviews.belongsTo(Products);

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
