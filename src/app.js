const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { rateLimiter } = require('./middlewares/');
const path = require('path');
const { SECRET_AUTH_ZERO, CLIENT_ID_AUTH_ZERO, ISSUER_BASE_URL, BASE_URL_LOCAL_AUTH_ZERO } = process.env;
const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: SECRET_AUTH_ZERO,
    baseURL: BASE_URL_LOCAL_AUTH_ZERO,
    clientID: CLIENT_ID_AUTH_ZERO,
    issuerBaseURL: ISSUER_BASE_URL
};

require('./db.js');


const server = express();
// Proxy configuration
const trustProxyFn = (/* ip */) => {
    // Por ahora, confiamos en todas las conexiones
    return true;
};
server.set('trust proxy', trustProxyFn);
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
// eslint-disable-next-line no-undef
server.use(express.static(path.join(__dirname, 'public')));

// auth router attaches /login, /logout, and /callback routes to the baseURL
server.use(auth(config));
server.use('/', routes);

// Without middleware
server.get('/callback', function (req, res) {
    res.redirect('/users/registered-authzero');
});

// Error catching endware.
server.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
    next ? next() : null;
});

module.exports = server;
