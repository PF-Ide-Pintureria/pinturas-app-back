const { Providers } = require("../../db");

const deleteProviderController = async (id) => {
    const provider = await Providers.findByPk(id);

    if (!provider) throw Error("PROVEEDOR NO ENCONTRADO");

    if (Providers.active != true) throw Error("PROVEEDOR NO ACTIVO");

    await provider.update({ active: false });

    return provider.dataValues;
};

module.exports = deleteProviderController;
