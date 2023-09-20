const { ProvidersControllers } = require('../../controllers');
const { deleteProvider } = ProvidersControllers;

const deleteProviderHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteProvider(id);
        console.log(result);
        return res.status(200).json({ provider: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteProviderHandler;
