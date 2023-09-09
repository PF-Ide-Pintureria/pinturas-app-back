const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

    destination: (req, res, cb) => {

        cb(null, "./src/assets/blogs");

    },
    filename: (req, file, cb) => {

        cb(null, "post-" + Date.now() + "-" + file.originalname);
    },

});

const blogsUploads = multer({
    storage,
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {

        const filetypes = /jpeg|jpg|png|gif|webp/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );

        if (mimetype && extname) {

            return cb(null, true);

        }

        cb("Error: File upload only supports the following filetypes - " +
            filetypes);

    },
});

module.exports = blogsUploads;
