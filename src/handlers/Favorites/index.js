const addFavorite = require("./addFavoriteHandler");
const deleteFavorite = require("./deleteFavoriteHandler");

const FavoritesHandlers = {
    addFavorite,
    deleteFavorite
};

module.exports = FavoritesHandlers;
