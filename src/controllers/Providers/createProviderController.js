const { Providers } = require("../../db.js");

const createProviderController = async (name, discount, markup) => {

    const provider = new Providers({
        name: name.toUpperCase(),
        discount,
        markup
    });
    //Guardar el provider en la base de datos
    await provider.save();

    return provider;
};

module.exports = createProviderController;
