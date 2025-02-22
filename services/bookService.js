const BookRepository = require("../repositories/bookRepository");

class BookService {
  static getAllBooks() {
    return BookRepository.getAllBooks();
  }

  static getBookById(id) {
    return BookRepository.getBookById(id);
  }


//   static getBooksByAuthor(authorName){
//     return BookRepository.getBookByAuthor(authorName)
//   }
  static getBooksByAuthor(author) {
    return BookRepository.getAllBooks().filter(book => 
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }

}

module.exports = BookService;