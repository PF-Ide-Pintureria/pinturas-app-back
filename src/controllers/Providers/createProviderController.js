const { Providers } = require("../../db.js");

const createProviderController = async (name, discount) => {

    const provider = new Providers({
        name: name.toUpperCase(),
        discount
    });
    //Guardar el provider en la base de datos
    await provider.save();

    return provider;
};

module.exports = createProviderController;
