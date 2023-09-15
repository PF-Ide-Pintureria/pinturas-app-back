const { ProductsControllers } = require('../../controllers');
const { updatePrices } = ProductsControllers;

const updatePricesHandler = async (req, res) => {
    const uploadedFile = req.file;

    // Verificar si se cargó un archivo
    if (!uploadedFile) return res.status(400).json({ error: 'No se cargó ningún archivo.' });


    const result = await updatePrices(uploadedFile);
    res.status(200).send(result);
};

module.exports = updatePricesHandler;
