
const { FavoritesControllers } = require("../../controllers");
const { addFavorite } = FavoritesControllers;

const addFavoriteHandler = async (req, res) => {
    try {
        const { idUser, idProduct } = req.body;
        if (!idUser || !idProduct) return res.status(400).json({ error: "faltan datos" });

        const result = await addFavorite(idUser, idProduct);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = addFavoriteHandler;
