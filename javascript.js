let myLibrary = [];

function Book(title, author, pages, hasReadBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasReadBook = hasReadBook;
}

function addBookToLibrary() {
  let bookTitle = prompt('book Title');
  let bookAuthor = prompt('book author');
  let bookPages = prompt('how many pages?');
  let hasReadTheBook = prompt('already read it?');

  const newBook = new Book(bookTitle, bookAuthor, bookPages, hasReadTheBook);

  myLibrary.push(newBook);

  return newBook;
}

addBookToLibrary();

console.log(myLibrary);
