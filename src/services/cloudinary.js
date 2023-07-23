const cloudinary = require("cloudinary").v2;
require('dotenv').config();
const { CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret: CLOUDINARY_SECRET
});


const DEFAULT_IMAGE = 'http://www.pinturasfadepa.com.ar' +
    "/latex/imgnotas/prof_interior_opt.jpg";

const uploadImage = async (imagePath) => {

    const filename = imagePath || DEFAULT_IMAGE;

    // Validar si el path es seguro;
    const safePath = sanitize(filename, { replacement: "_" });
    if (safePath !== filename) {
        return res.status(400).json({
            status: "error",
            mensaje: "Por favor sube un formato válido de imagen"
        });
    };

    //Sacar la extensión;
    let extension = filename.split(".").pop();

    //Comprobar extension;
    if (!["png", "jpg", "jpeg", "gif", "webp"]
        .includes(extension.toLowerCase())) {
        throw new Error("Formato de imagen no válido");
    };

    // Subir la imagen a cloudinary
    const { secure_url } = await cloudinary.uploader.upload(
        filename,
        { public_id: `${filename}` },
        function (error, result) {
            if (error) {
                throw new Error(error);
            };
        },
    );

    return secure_url;

};


module.exports = uploadImage;
