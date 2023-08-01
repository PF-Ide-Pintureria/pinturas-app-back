const addFavorite = require("./addFavoriteController");
const deleteFavorite = require("./deleteFavoriteController");
const getFavorites = require("./getFavoritesController");
const FavoritesControllers = {
    addFavorite,
    deleteFavorite,
    getFavorites
};

module.exports = FavoritesControllers;
