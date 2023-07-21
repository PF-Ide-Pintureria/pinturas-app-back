const { createProductController } = require('../controllers');
const fs = require("fs");
const sanitize = require("sanitize-filename");


const createProductHandler = async (req, res) => {

    console.log('Estamos en el handler de createProductHandler');
    console.log('req.body', req.body);
    console.log('req.file', req.file);
    console.log('Objeto req', req);

    try {

        if (!req.file) return res.status(400)
            .send("No se ha proporcionado la imagen del producto.");

        //Obtener nombre de la imagen;
        let imgProduct = req.file.originalname;

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
        const defaultPath = 'http://www.pinturasfadepa.com.ar/latex/imgnotas/prof_interior_opt.jpg';
        const saveImage = req.file?.filename ?? defaultPath;

        console.log('saveImage', saveImage);

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
