const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { rateLimiter } = require('./middlewares/');
const path = require('path');

require('./db.js');

const server = express();

// Proxy configuration
server.set('trust proxy', true);
server.use(rateLimiter);
// Middleware para capturar la dirección
// IP del encabezado X - Forwarded - For cuando esté presente
server.use((req, res, next) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    req.clientIp = clientIp;
    next();
});

server.name = 'API';
//MIDDLEWARES
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
    // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// Utilizar el middleware express.static para servir
// archivos estáticos desde la carpeta "public"
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;
