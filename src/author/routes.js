const { Router } = require("express");
const authorRouter = Router();
const { addAuthor, getAllAuthors, getBooksByAuthor } = require("./controllers");

authorRouter.post("/Authors/addAuthor", addAuthor);
authorRouter.get("/Authors/getAllAuthors", getAllAuthors);
authorRouter.get("/Authors/getBooksByAuthor/:authorName", getBooksByAuthor);

module.exports = authorRouter;
