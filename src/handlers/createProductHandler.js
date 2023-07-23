const { createProductController } = require('../controllers');
const { uploadImage } = require('../services');


const createProductHandler = async (req, res) => {

    try {

        const secure_url = await uploadImage(req.file.path);
        req.body.image = secure_url;
        await createProductController(req.body);

        return res.status(201).json({
            status: "success",
            message: "Producto creado exitosamente",
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    };

};

module.exports = createProductHandler;
