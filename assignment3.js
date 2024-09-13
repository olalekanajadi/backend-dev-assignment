class Book {
  #isbn;
  constructor(title, author, isbn) {
    (this.title = title),
      (this.author = author),
      (this.#isbn = isbn),
      (this.available = true);
  }

  getIsbn() {
    return this.#isbn;
  }

  setIsbn(newIsbn) {
    return (this.#isbn = newIsbn);
  }
  borrowBook() {
    if (this.available) {
      this.available = false;
      return `You have borrowed "${this.title}"`;
    } else {
      return `The book "${this.title}" is not available`;
    }
  }

  returnBook() {
    this.available = true;
    return `You have returned "${this.title}"`;
  }
}

class Library {
  constructor(books = []) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
    return this.books;
  }

  removeBook(isbn) {
    let bookFound = this.books.forEach((book, index) => {
      if (book.isbn === isbn) {
        this.books.splice(index, 1);
      }
    });
    return bookFound
      ? `Book with ISBN ${isbn} has been removed`
      : `Book with ISBN ${isbn} was not found`;
  }

  findBookByTitle(title) {
    const foundBook = this.books.find((book) => title === book.title);
    return foundBook ? foundBook : "Not Found";
  }
}

class DigitalLibrary extends Library {
  constructor() {
    super();
  }
  downloadBook(isbn) {
    let book = this.books.find((book) => book.getIsbn() === isbn);
    if (book) {
      return `${book.title} with ISBN ${isbn} is available for download....downloading`;
    } else {
      return `No book with ISBN ${isbn} was found`;
    }
  }
}

//Test
const library = new Library();

const book1 = new Book("Psychology of Money", "Morgan House", 1001);
const book2 = new Book("Dragon Tattoo", "Stieg Larson", 1002);
const book3 = new Book("Harry Potter", "Rowling", 1003);
const book4 = new Book("A Little Life", "Hanya", 1004);
const book5 = new Book("Tipping Point", "Malcolm Gladwell", 1005);

//add books
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

//test borrow and return functions
console.log("========Library Class========");
console.log(book1.borrowBook());
console.log("AVAILABILITY",book1.available);
console.log(book1.returnBook());
console.log("AVAILABILITY",book1.available);

// test remove function
console.log(library.removeBook(1004));
console.log(library.books);

//test find book by title function
console.log(library.findBookByTitle("Tipping Point"));


//testing the digitalLibrary class
let digitalLibrary = new DigitalLibrary();
digitalLibrary.addBook(book1);
digitalLibrary.addBook(book2);
digitalLibrary.addBook(book3);
digitalLibrary.addBook(book4);
digitalLibrary.addBook(book5);
console.log("========Digital Library========");
console.log("CHECKING FOR BOOK: ",digitalLibrary.downloadBook(1001));
console.log("CHECKING FOR BOOK: ",digitalLibrary.downloadBook(1006));