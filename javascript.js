const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const hasReadBook = document.querySelector('#hasRead');
const btn = document.querySelector('.btn');

let myLibrary = [];

function Book(title, author, pages, hasReadBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasReadBook = hasReadBook;

  /* this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasReadBook}`;
  }; */
}

/* const theHobbit = new Book(
  'The Hobbit',
  'J.R.R. Tolkien',
  '295',
  'not read yet'
); */

/* console.log(theHobbit.info()); */

function addBookToLibrary() {
  let bookTitle = prompt('book Title');
  let bookAuthor = prompt('book author');
  let bookPages = prompt('how many pages?');
  let hasReadTheBook = prompt('already read it?');

  const newBook = new Book(bookTitle, bookAuthor, bookPages, hasReadTheBook);

  myLibrary.push(newBook);

  return newBook;
}

function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;
    hasReadBook.textContent = myLibrary[i].hasReadBook;
  }
}

addBookToLibrary();

console.log(myLibrary);

btn.addEventListener('click', () => {
  displayBook();
});
