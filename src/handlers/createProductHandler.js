const { createProductController } = require('../controllers');
const fs = require("fs");
const sanitize = require("sanitize-filename");
const cloudinary = require("cloudinary").v2;
require('dotenv').config();
const { CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({ 
    cloud_name: CLOUD_NAME, 
    api_key: CLOUDINARY_KEY, 
    api_secret: CLOUDINARY_SECRET 
  });
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

                fs.unlinkSync(filePath);

                return res.status(400).json({
                    status: "error",
                    mensaje: "Por favor sube un formato válido de imagen"
                });

            };

        };

        // si la imagen es correcta agregar a la bd;
        const saveImage = req.file ? req.file.path : defaultImagePath;

        req.body.image = saveImage;
        
        await cloudinary.uploader.upload(`${req.file.path}`,
        { public_id: `${req.file.filename}` }, 
        async function(error, result) {

            if(result){

                req.body.image = result.url;

                const [product] = await createProductController(req.body);

                return res.status(201).json({

                    status: "success",
                    message: "Producto publicado exitosamente",
                    product
                });

            }
            
            if(error){

                const [product] = await createProductController(req.body);

                return res.status(201).json({

                    status: "success",
                    message: "Producto publicado exitosamente",
                    product
                });


            }
        
        });

    } catch (error) {

        return res.status(500).json({ error: error.message });

    };

};

module.exports = createProductHandler;
