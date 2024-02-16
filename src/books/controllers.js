const Book = require("./model");
const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      AuthorId: req.body.AuthorId,
      GenreId: req.body.GenreId,
    });
    res
      .status(201)
      .json({ message: `${book.title} was added successfully`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ include: "Author" });
    res.status(200).json({ message: "success all the books", books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
const updateAuthor = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await Book.findOne({ where: { title: title } });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    book.author = author;
    await book.save();
    res.status(200).json({ message: "Author updated", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
const deleteBookByTitle = async (req, res) => {
  try {
    const { title } = req.body;
    const book = await Book.findOne({ where: { title: title } });
    if (!book) {
      return res
        .status(404)
        .json({ error: "No book found with the specified title" });
    }
    await book.destroy();
    res.status(200).json({ message: "Book deleted", deletedBook: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
const deleteAllBooks = async (req, res) => {
  try {
    await Book.destroy({ where: {}, truncate: true });
    res.status(200).json({ message: "All books deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  updateAuthor: updateAuthor,
  deleteBookByTitle: deleteBookByTitle,
  deleteAllBooks: deleteAllBooks,
};
