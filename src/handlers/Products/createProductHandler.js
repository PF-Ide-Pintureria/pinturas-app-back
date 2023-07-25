const { ProductsControllers } = require('../../controllers');
const { createProduct } = ProductsControllers;
const { uploadImage } = require('../../services/');


const createProductHandler = async (req, res) => {

    try {

        if (req.file) {

            const secure_url = await uploadImage(req.file);

            req.body.image = secure_url;

        }

        const postProduct = await createProduct(req.body);

        return res.status(201).json({
            status: "success",
            message: "Producto creado exitosamente",
            product: postProduct
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    };

};


module.exports = createProductHandler;
