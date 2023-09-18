const { Providers } = require("../../db.js");

const editProvider = async (id, { name, discount, markup }) => {



    const provider = await Providers.findOne({ where: { id } });
    if (!provider) {
        return { message: "provider not found" };
    }
    if (name !== undefined) {
        provider.name = name;
    }
    if (discount !== undefined) {
        provider.discount = discount;
    }
    if (markup !== undefined) {
        provider.markup = markup;
    }
    await provider.save();
    return provider;

};

module.exports = editProvider;
