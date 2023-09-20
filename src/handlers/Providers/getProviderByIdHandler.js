const { ProvidersControllers } = require('../../controllers');
const { getProviderById } = ProvidersControllers;

const getProviderByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getProviderById(id);
        return res.status(200).json({ Provider: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getProviderByIdHandler;