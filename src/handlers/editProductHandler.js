const { editProductController } = require('../controllers/');
const { uploadImage } = require('../services');


const editProductHandler = async (req, res) => {

    try {
        const { id } = req.params;
        const secure_url = await uploadImage(req.file.path);
        req.body.image = secure_url;
        const product = await editProductController(id, req.body);

        return res.status(200).json({
            status: "success",
            message: "Producto editado exitosamente",
            product,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    };

};


module.exports = editProductHandler;
