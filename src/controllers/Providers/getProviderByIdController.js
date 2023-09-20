const { Providers } = require('../../db');
const getProviderByIdController = async (id) => {

    if (id) {
        const provider = await Providers.findByPk(id);
        if (!provider) throw Error("PROVEEDOR NO ENCONTRADO");

        return provider.dataValues;

    }
};

module.exports = getProviderByIdController;
