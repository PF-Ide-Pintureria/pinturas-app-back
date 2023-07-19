const { createProductController } = require('../controllers');
const fs = require("fs");

const createProductHandler = async (req, res) => {

    if (!req.file) return res.status(400)
        .send("No se ha proporcinado la imagen de producto");

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

    try {
        const [product] = await createProductController(req.body);
        return res.status(201).json({

            status: "success",
            mensaje: "Producto publicado exitosamente",
            producto: product,
            imagen: req.file

        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = createProductHandler;
