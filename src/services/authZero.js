const {
    SECRET_AUTH_ZERO, CLIENT_ID_AUTH_ZERO,
    ISSUER_BASE_URL, BASE_URL_LOCAL_AUTH_ZERO
} = process.env;
const { auth } = require('express-openid-connect');


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: SECRET_AUTH_ZERO,
    baseURL: BASE_URL_LOCAL_AUTH_ZERO,
    clientID: CLIENT_ID_AUTH_ZERO,
    issuerBaseURL: ISSUER_BASE_URL
};


module.exports = auth(config);
