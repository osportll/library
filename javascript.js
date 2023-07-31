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

  if (arguments[(0, 1, 2, 3)] === '') {
    alert('Fields cannot be empty');
  } else {
    myLibrary.push(newBook);
    displayBook();
    return newBook;
  }
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
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;
  const bookPages = document.querySelector('.pages').value;
  const hasReadTheBook = document.querySelector('.hasReadIt').value;

  console.log(document.querySelector('.title'));

  addBookToLibrary(bookTitle, bookAuthor, bookPages, hasReadTheBook);

  console.log(myLibrary);
  modalContainer.classList.remove('showModal');

  return;
});

/* Things to add:

-Make the pages input accept only numbers
-Make the question input a checkbox instead

*/
