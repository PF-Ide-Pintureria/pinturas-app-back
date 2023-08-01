const myProfileHandler = (req, res) => {

    return res.status(200).json({
        status: "success",
        user: req.user,
        mensaje: "Ruta de mi perfil"

    });

};

module.exports = myProfileHandler;