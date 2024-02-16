const Genre = require("./models");
const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({ genreName: req.body.genreName });
    res
      .status(201)
      .json({
        message: `${genre.genreName} Genre Name added successfully`,
        genre: genre,
      });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll({ include: "Books" });
    res.status(200).json({ message: "success all the Genres", genres });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
module.exports = { addGenre, getAllGenres };
