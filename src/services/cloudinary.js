const cloudinary = require("cloudinary").v2;
const { parsed: ENV } = require('dotenv').config();
const { CLOUD_NAME, CLOUD_KEY, CLOUD_SECRET } = ENV;
const sanitize = require("sanitize-filename");

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_KEY,
    api_secret: CLOUD_SECRET
});


const DEFAULT_IMAGE = 'http://www.pinturasfadepa.com.ar' +
    "/latex/imgnotas/prof_interior_opt.jpg";

const uploadImage = async (file) => {

    let imgProduct = file.originalname;

    //Sacar la extensión;
    let extension = imgProduct.split(".").pop();

    //Comprobar extension;
    if (!["png", "jpg", "jpeg", "gif", "webp"]
        .includes(extension.toLowerCase())) {
        throw new Error("Por favor sube extensión de imagen permitida");
    }

    const fileName = file.filename || DEFAULT_IMAGE;

    // Validar si el path es seguro;
    const safePath = sanitize(fileName, { replacement: "_" });
    if (safePath !== fileName) {
        throw new Error("Por favor sube un formato válido de imagen");
    }

    // Subir la imagen a cloudinary
    const { secure_url } = await cloudinary.uploader.upload(
        file.path,
        { public_id: `${file.filename}` },
        function (error,) {
            if (error) {
                throw new Error(error);
            }
        },
    );

    return secure_url;

};


module.exports = uploadImage;
