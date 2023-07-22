const { createProductController } = require('../controllers');
const fs = require("fs");
const sanitize = require("sanitize-filename");


const createProductHandler = async (req, res) => {

    try {

        const defaultImagePath = 'http://www.pinturasfadepa.com.ar' +
            "/latex/imgnotas/prof_interior_opt.jpg";
        const imgProduct = req.file?.filename ?? defaultImagePath;

        //Sacar la extensión;
        let extension = imgProduct.split(".").pop();

        //Comprobar extension;
        if (!["png", "jpg", "jpeg", "gif", "webp"]
            .includes(extension.toLowerCase())) {

            //Si no es la extensión correcta eliminar el archivo;
            const filePath = req.file.path;

            // Validar si el path es seguro;
            const safePath = sanitize(filePath, { replacement: "_" });
            if (safePath !== filePath) {
                throw new Error("El path no es seguro");
            };

            fs.unlinkSync(filePath);

            return res.status(400).json({
                status: "error",
                mensaje: "Por favor sube un formato válido de imagen"
            });

        };

        // si la imagen es correcta agregar a la bd;
        const saveImage = req.file ? req.file.path : defaultImagePath;

        req.body.image = saveImage;
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
