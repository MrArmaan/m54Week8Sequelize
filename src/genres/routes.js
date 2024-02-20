const { Router } = require("express");
const genreRouter = Router();
const { addGenre, getAllGenres } = require("./controllers");

genreRouter.post("/Genres/addGenres", addGenre);
genreRouter.get("/Genres/getAllGenres", getAllGenres);

module.exports = genreRouter;
