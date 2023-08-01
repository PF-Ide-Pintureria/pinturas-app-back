const addFavorite = require("./addFavoriteHandler");
const deleteFavorite = require("./deleteFavoriteHandler");
const getFavorites = require("./getFavoritesHandler");

const FavoritesHandlers = {
    addFavorite,
    deleteFavorite,
    getFavorites
};

module.exports = FavoritesHandlers;
