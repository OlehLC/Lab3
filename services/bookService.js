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
  static getBooksByAuthor(author, renderCallback) {
    return BookRepository.getBookByAuthor(author, (err, books) => {
      if (err) {
          console.error("Помилка:", err);
          return;
      }
      renderCallback(books)
      // console.log("Знайдені книги:", books);
  });
  }



  static getBookByTitle(title){
    return BookRepository.getBookByTitle(title).then(books => books);
  }
  static async getBookByKeywords(keywordArr){
    return await BookRepository.getBookByKeywords(keywordArr)
  }
}

module.exports = BookService;