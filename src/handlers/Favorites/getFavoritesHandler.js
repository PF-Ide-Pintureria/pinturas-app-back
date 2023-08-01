
const { FavoritesControllers } = require("../../controllers");
const { getFavorites } = FavoritesControllers;

const getFavoritesHandler = async (req, res) => {
    try {
        const { idUser } = req.body;
        const favoritesUser = await getFavorites(idUser);
        return res.status(200).json(favoritesUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getFavoritesHandler;
