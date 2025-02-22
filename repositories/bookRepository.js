const fs = require("fs");
const path = require("path");
const Book = require("../models/ book");

const booksFilePath = path.join(__dirname, "../data/books.json");

class BookRepository {
  static getAllBooks() {
    const data = fs.readFileSync(booksFilePath, "utf-8");
    return JSON.parse(data).map(book => new Book(book.id, book.title, book.author, book.keywords));
  }

  static getBookById(id) {
    return this.getAllBooks().find(book => book.id == id);
  }

  static getBookByAuthor(authorName) {
    return this.getAllBooks().find(book => book.author == authorName);
  }
}

module.exports = BookRepository;