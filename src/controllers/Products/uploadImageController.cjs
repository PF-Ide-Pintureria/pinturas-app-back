const { cloudinary } = require('../../services/cloudinary');
const { Products } = require('../../db');

const uploadImageController = async (id) => {
    const product = await Products.findByPk(id);
    const { image } = product;
    if (image) {
        if (image.includes('cloudinary')) {
            return;
        }
    }
    // const products = await Products.findAll();
    const callback = async (error, result) => {
        if (error) {
            console.error(error);
        } else {
            const { secure_url } = result;
            await product.update({
                image: secure_url
            });
            console.log(`Producto ${id} actualizado con imagen ` +
                `${secure_url}`);
        }
    };
    // console.log("image", image);
    const urlObj = new URL(image);
    const filename = urlObj.pathname.split('/').pop();
    const options = {
        public_id: filename,
        overwrite: true,
        invalidate: true,
        resource_type: 'image',
        use_filename: true,
    };
    cloudinary.uploader.upload(image, options, callback);
};

module.exports = uploadImageController;
