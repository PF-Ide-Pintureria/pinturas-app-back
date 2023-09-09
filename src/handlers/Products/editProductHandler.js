const { ProductsControllers } = require('../../controllers');
const { editProduct } = ProductsControllers;
const { uploadImage } = require('../../services/');

const editProductHandler = async (req, res) => {

    try {

        const { id } = req.params;

        if (req.file) {

            const secure_url = await uploadImage(req.file);

            req.body.image = secure_url;

        }

        const product = await editProduct(id, req.body);

        return res.status(201).json({
            status: "success",
            message: "Producto editado exitosamente",
            product: product
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

};

module.exports = editProductHandler;
