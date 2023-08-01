const { Router } = require('express');
const { FavoritesHandlers } = require('../handlers');

const router = Router();
//. Add favorites
router.post("/", FavoritesHandlers.addFavorite);
//. Delete favorites
router.delete("/", FavoritesHandlers.deleteFavorite);
//. Get favorites
router.get("/", FavoritesHandlers.getFavorites);

module.exports = router;
