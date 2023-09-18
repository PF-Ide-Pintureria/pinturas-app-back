const { Providers } = require("../../db");

const getProvidersController = async () => {
    return await Providers.findAll();
};

module.exports = getProvidersController;
