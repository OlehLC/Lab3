const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);
// router.get("/:author", booksController.getBookByAuthor);
router.get("/search/author", booksController.getBooksByAuthor);

module.exports = router;