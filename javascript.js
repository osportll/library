const btn = document.querySelector('.btn');
const modalContainer = document.querySelector('.modalContainer');
const bookForm = document.querySelector('.bookForm');
const overlay = document.querySelector('.overlay');
const cards = document.querySelector('.cards');
const inputFieldText = document.querySelectorAll('#inputFields');

let removeIsClicked = false;
let target;

let myLibrary = [];

function Book(title, author, pages, hasReadBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasReadBook = hasReadBook;
}

function toggleReadStatus(btn, status1, status2, string) {
  btn.classList.remove(status1);
  btn.classList.add(status2);
  btn.textContent = string;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, hasReadTheBook) {
  const newBook = new Book(bookTitle, bookAuthor, bookPages, hasReadTheBook);

  myLibrary.push(newBook);

  displayBook();

  return newBook;
}

function displayBook() {
  /* if (submitIsClicked > 1) {
    myLibrary.shift();
  } */

  const newDiv = document.createElement('div');
  const newP1 = document.createElement('p');
  const newP2 = document.createElement('p');
  const newP3 = document.createElement('p');
  const createBtn1 = document.createElement('button');
  const createBtn2 = document.createElement('button');
  newP1.classList.add('title');
  newP2.classList.add('author');
  newP3.classList.add('pages');
  createBtn1.classList.add('hasRead');
  newDiv.classList.add('bookCard');
  createBtn2.classList.add('showRemoveBtn');
  createBtn2.textContent = 'Remove';

  const elementsToAdd = [newP1, newP2, newP3, createBtn1, createBtn2];

  elementsToAdd.forEach((element) => {
    newDiv.appendChild(element);
  });

  cards.appendChild(newDiv);

  myLibrary.forEach((book, index) => {
    newP1.textContent = book.title;
    newP2.textContent = book.author;
    newP3.textContent = book.pages;

    console.log(index);

    if (book.hasReadBook === 'Already Read') {
      createBtn1.classList.add('showReadBtn');
      createBtn1.textContent = 'Already read';
    } else if (book.hasReadBook === 'Not read yet') {
      createBtn1.classList.add('showNotReadBtn');
      createBtn1.textContent = 'Not read yet';
    }

    createBtn1.setAttribute('data-book-index', index);
  });

  createBtn2.addEventListener('click', (e) => {
    removeIsClicked = true;
    target = e.target;
    removeCard();
    return;
  });

  createBtn1.addEventListener('click', (e) => {
    const bookIndex = e.target.getAttribute('data-book-index');
    const book = myLibrary[bookIndex];

    console.log(bookIndex);

    if (book.hasReadBook === 'Already Read') {
      toggleReadStatus(
        createBtn1,
        'showReadBtn',
        'showNotReadBtn',
        'Not read yet'
      );
      book.hasReadBook = 'Not read yet'; // Update the book object in myLibrary
    } else if (book.hasReadBook === 'Not read yet') {
      toggleReadStatus(
        createBtn1,
        'showNotReadBtn',
        'showReadBtn',
        'Already read'
      );
      book.hasReadBook = 'Already Read'; // Update the book object in myLibrary
    }
  });
}

function removeCard() {
  if (removeIsClicked) {
    const removeButton = target;
    const bookCard = removeButton.closest('.bookCard');
    bookCard.remove();
  }
}

btn.addEventListener('click', () => {
  modalContainer.classList.add('showModal');
  overlay.classList.add('overlayActive');
  inputFieldText.forEach((field) => {
    field.value = '';
  });
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

  addBookToLibrary(
    `"${bookTitle}"`,
    bookAuthor,
    `${bookPages} pages`,
    bookIsRead
  );

  console.log(myLibrary);
  modalContainer.classList.remove('showModal');
  overlay.classList.remove('overlayActive');

  return;
});

overlay.addEventListener('click', () => {
  modalContainer.classList.remove('showModal');
  overlay.classList.remove('overlayActive');
});
