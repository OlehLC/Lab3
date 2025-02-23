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
    const author = BookService.getBooksByAuthor(req.query.author,
      (author)=>res.render("author", { author })
    );
};

exports.getBookByTitle = (req, res)=>{
  BookService.getBookByTitle(req.query.title).then(title => {
    // console.log(title);
    
    res.render("title", { title });
    // console.log(title);
  });
}

exports.getBookByKeywords = async (req, res)=>{
  BookService.getBookByKeywords(req.query.keywordArr.split(',')).then(books => {
    res.render("title", { title:books });

  });
}