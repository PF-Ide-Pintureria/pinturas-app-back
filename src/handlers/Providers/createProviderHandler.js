const { ProvidersControllers } = require('../../controllers');
const { createProvider } = ProvidersControllers;

const createProviderHandler = (req, res) => {

    res.status(200).send(createProvider());

};

module.exports = createProviderHandler;
