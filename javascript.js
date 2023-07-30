const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const hasReadBook = document.querySelector('#hasRead');
const btn = document.querySelector('.btn');
const modalContainer = document.querySelector('.modalContainer');
const bookForm = document.querySelector('.bookForm');

let myLibrary = [];

function Book(title, author, pages, hasReadBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasReadBook = hasReadBook;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, hasReadTheBook) {
  const newBook = new Book(bookTitle, bookAuthor, bookPages, hasReadTheBook);

  myLibrary.push(newBook);

  displayBook();

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

console.log(myLibrary);

btn.addEventListener('click', () => {
  modalContainer.classList.add('showModal');
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitleInput = document.querySelector('.title');
  const bookAuthorInput = document.querySelector('.author');
  const bookPagesInput = document.querySelector('.pages');
  const hasReadTheBookInput = document.querySelector('.hasReadIt');

  const bookTitle = bookTitleInput.value;
  const bookAuthor = bookAuthorInput.value;
  const bookPages = bookPagesInput.value;
  const hasReadTheBook = hasReadTheBookInput.value;

  addBookToLibrary(bookTitle, bookAuthor, bookPages, hasReadTheBook);
  return;
});
