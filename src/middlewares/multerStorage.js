const multer = require("multer");
const storage = multer.diskStorage({

    destination: (req, res, cb) => {

        cb(null, "./src/assets/products");

    },
    filename: (req, file, cb) => {

        cb(null, "product-" + Date.now() + "-" + file.originalname);
    }
});

const productsUploads = multer({ storage, limits: { fileSize: 1000000 } });

module.exports = productsUploads;
