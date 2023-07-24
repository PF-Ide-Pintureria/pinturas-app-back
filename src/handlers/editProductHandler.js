const { editProductController } = require('../controllers/');
const uploadImage = require('../services/cloudinary');


const editProductHandler = async (req, res) => {

    try {

        const { id } = req.params;

        if(req.file){

            const secure_url = await uploadImage(req.file);

            req.body.image = secure_url;    
            
        }

        const product = await editProductController(id, req.body);

        return res.status(201).json({
            status: "success",
            message: "Producto editado exitosamente",
            product: product
        });

    
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };

};


module.exports = editProductHandler;
