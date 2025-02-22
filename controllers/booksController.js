const BookService = require("../services/bookService");

exports.getAllBooks = (req, res) => {
  const books = BookService.getAllBooks();
  res.render("books", { books });
};

exports.getBookById = (req, res) => {    
  const book = BookService.getBookById(req.params.id);
//   console.log(book);

  res.render("book-id", { book });
};

exports.getBooksByAuthor = (req, res) => {    
    const author = BookService.getBooksByAuthor(req.query.author);
//    console.log(author);
  
    res.render("author", { author });
  };