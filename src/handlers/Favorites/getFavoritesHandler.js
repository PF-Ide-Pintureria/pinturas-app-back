
const { FavoritesControllers } = require("../../controllers");
const { getFavorites } = FavoritesControllers;

const getFavoritesHandler = async (req, res) => {
    try {
        const { idUser } = req.body;
        if (!idUser) return res.status(400).json({ error: "faltan datos" });

        const favoritesUser = await getFavorites(idUser);
        return res.status(200).json(favoritesUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getFavoritesHandler;
