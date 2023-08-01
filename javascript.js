const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const hasReadBook = document.querySelector('#hasRead');
const btn = document.querySelector('.btn');
const modalContainer = document.querySelector('.modalContainer');
const bookForm = document.querySelector('.bookForm');
const overlay = document.querySelector('.overlay');

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

btn.addEventListener('click', () => {
  modalContainer.classList.add('showModal');
  overlay.classList.add('overlayActive');
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;
  const bookPages = document.querySelector('.pages').value;
  const hasReadTheBook = document.querySelector('.hasReadIt');
  let bookIsRead;

  if (hasReadTheBook.checked) {
    bookIsRead = 'Already Read';
  } else {
    bookIsRead = 'Not read yet';
  }

  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookIsRead);

  console.log(myLibrary);
  modalContainer.classList.remove('showModal');
  overlay.classList.remove('overlayActive');

  return;
});

overlay.addEventListener('click', () => {
  modalContainer.classList.remove('showModal');
  overlay.classList.remove('overlayActive');
});

/* Things to add:

-Make the pages input accept only numbers
-Make the question input a checkbox instead

*/
