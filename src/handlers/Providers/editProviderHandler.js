const { ProvidersControllers } = require('../../controllers');
const { editProvider } = ProvidersControllers;

const editProviderHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, discount, markup } = req.body;
        if (!id || !name || !discount || !markup) {
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
