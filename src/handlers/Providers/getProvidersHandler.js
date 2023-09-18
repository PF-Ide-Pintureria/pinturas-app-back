const { ProvidersControllers } = require('../../controllers');
const { getProviders } = ProvidersControllers;

const getProvidersHandler = async (req, res) => {
    try {
        return res.status(200).json(await getProviders());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }

};

module.exports = getProvidersHandler;
