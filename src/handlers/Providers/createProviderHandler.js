const { ProvidersControllers } = require('../../controllers');
const { createProvider } = ProvidersControllers;

const createProviderHandler = async (req, res) => {
    try {
        const { name, discount } = req.body;
        if (!name || !discount) return res.status(400).json({ error: "Faltan datos" });

        return res.status(200).send(await createProvider(name, discount));

    } catch (error) {
        if (error.errors[0].type == "unique violation") { //cuando queremos crear un provedor cuyo nombre ya existe
            return res.status(404).json({ message: error.errors[0].message });
        }
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createProviderHandler;
