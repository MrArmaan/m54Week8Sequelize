const Author = require("./models");
const Book = require("../books/model");
const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      authorName: req.body.authorName,
      authorId: req.body.authorId,
    });
    res
      .status(201)
      .json({
        message: `${author.title} Author was added successfully`,
        author,
      });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({ include: "Books" });
    res.status(200).json({ message: "success all the authors", authors });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
const getBooksByAuthor = async (req, res) => {
  try {
    const authorName = req.params.authorName;
    const author = await Author.findOne({ where: { authorname: authorName } });
    const books = await Book.findAll({ where: { AuthorId: author.id } });
    res.status(200).json({ message: "Books found by author", books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
module.exports = { addAuthor, getAllAuthors, getBooksByAuthor };
