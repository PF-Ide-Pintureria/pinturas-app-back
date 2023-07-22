const { editProductController } = require('../controllers/');


const editProductHandler = async (req, res) => {

    if (req.file) {
        //Obtener nombre de la imagen;
        let imgProduct = req.file.originalname;

        //Sacar la extensión;
        let extension = imgProduct.split(".").at(-1);

        //Comprobar extension;
        if (extension !== "png" && extension !== "jpg" && extension !== "jpeg"
            && extension !== "gif" && extension !== "webp") {

            //Si no es la extensión correcta eliminar el archivo;
            const filePath = req.file.path;

            fs.unlinkSync(filePath);

            return res.status(400).json({
                status: "error",
                mensaje: "Por favor sube un formato válido de imagen"
            });

        };

        // si la imagen es correcta agregar a la bd;
        const saveImage = req.file.filename;

        req.body.image = saveImage;
    };


    try {
        const { id } = req.params;
        const product = await editProductController(id, req.body);
        return res.status(201).json({

            status: "success",
            mesage: "Producto editado exitosamente",
            product
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    };
};

module.exports = editProductHandler;
