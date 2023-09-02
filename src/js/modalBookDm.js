import { getBase, addBase } from '/src/js/loginApi.js';

const elementSet = {
    
    backdropBook: document.querySelector('[data-modal-backdrop]'),
    modalStatusButton: document.querySelector('[dat-modal-to]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    BookContainer: document.querySelector('.content_book'), 
    
};

const getBooks = () => {
   
  return getBase().then(array => {

    return array;

  }).catch(() => {

      //message
  });
}

// search user
let existsUser = () => JSON.parse(localStorage.getItem('bookshelId'));
 

function openModal(event) {

  event.preventDefault();

  // remove status buttom event
  elementSet.modalStatusButton.removeEventListener('click', changeBookList);

  // need classes !!!
  if (!event.target.closest('li')) {
    return;
  } 
    // open modal window
    backdropBook.classList.toggle('hidden');

    mainBook();
}

function mainBook() {
  // search user
  let getUserID = existsUser();

  if(getUserID.length === 0); //massage;
    return;

  // read book array data from LocalStorage
  let books = getBooks();

  changeBookList(books);
}

function closeModal(event) {
  modalBook.classList.toggle('hidden');
  modalBook.classList.toggle('active');
}

const changeBookList = (booksData) => {
    modalStatusButton.text.value = "remove from shopping list";
    modalStatusButton.text.value = "add to shopping list";
}

elementSet.BookContainer.addEventListener('click', openModal);