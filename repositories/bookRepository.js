const fs = require("fs");
const path = require("path");
const Book = require("../models/ book");

const booksFilePath = path.join(__dirname, "../data/books.json");

class BookRepository {
  static getAllBooks() {
    const data = fs.readFileSync(booksFilePath, "utf-8");
    return JSON.parse(data).map(book => new Book(book.id, book.title, book.author, book.keywords));
  }

  static getAllBooksCallback(callback) {
    fs.readFile(booksFilePath, "utf-8", (err, data) => {
      if (err) return callback(err, null);
      const books = JSON.parse(data).map(book => new Book(book.id, book.title, book.author, book.keywords));
      // console.log(books);
      // return books
      callback(null, books);
    });

  }
  static getAllBooksPromise() {
    return new Promise((resolve, reject) => {
      fs.readFile(booksFilePath, "utf-8", (err, data) => {
        if (err) reject(err);
        else {
          const books = JSON.parse(data).map(book => new Book(book.id, book.title, book.author, book.keywords));
          resolve(books);
        }
      });
    });
  }
  static async getAllBooksAsync() {
    try {
      const data = await fs.promises.readFile(booksFilePath, "utf-8");
      return JSON.parse(data).map(book => new Book(book.id, book.title, book.author, book.keywords));
    } catch (err) {
      throw err;
    }
  }
  //==============================================
  static getBookById(id) {
    return this.getAllBooks().find(book => book.id == id);
  }

  static getBookByAuthor(authorName, callback) {
    let res;
     this.getAllBooksCallback((err, books)=>{
      if (err) return callback(err, null);

      res = books.filter(book => book.author.toLowerCase().includes(authorName.toLowerCase())); 
      callback(null, res);
      // console.log(res);
      
    })
// console.log(res);
//     return res;
  }
  static getBookByTitle(title) {
    return this.getAllBooksPromise().then(res=> res.filter(book => book.title.toLowerCase().includes(title.toLowerCase())), e=> console.log(e.message));
  }
  static async getBookByKeywords(keywordArr){
    const books = await this.getAllBooksAsync()
    
    const res = books.filter(book=>{
      return keywordArr.every(kword=>{
          return book.keywords.includes(kword)            
      })
  })
  return res
  }



}

module.exports = BookRepository;