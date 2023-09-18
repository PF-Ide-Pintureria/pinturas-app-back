const { ProvidersControllers } = require('../../controllers');
const { editProvider } = ProvidersControllers;

const editProviderHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, discount } = req.body;
        if (!id || !name || !discount) {
            return res.status(400).json({ message: "faltan datos" });
        }
        return res.status(200).json(await editProvider(id, req.body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });

    }
};

module.exports = editProviderHandler;
