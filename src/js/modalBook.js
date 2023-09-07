import { fetchBookById } from '../services/books-api';
import { getBase, addBase } from '/src/js/loginApi.js';
import Notiflix from 'notiflix';
// import bodyScrollLock  from '/node_modules/body-scroll-lock/lib/bodyScrollLock.min';

const bodyScrollLock = require('body-scroll-lock');
const body = document.querySelector('body');

const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

import amazonImage from '../images/bookMarkets/bookMarkets-x1/amazon.webp';
import appleBookImage from '../images/bookMarkets/bookMarkets-x1/tradeBook2.webp';
import bookShopImage from '../images/bookMarkets/bookMarkets-x1/tradeBook3.webp';

const targetModal = document.querySelector('.modal-book');

const bookCard = document.querySelector('.container-books');
bookCard?.addEventListener('click', openModal);

const modalBook = document.querySelector('[data-modal="1"]');

const overlayBook = document.querySelector('[data-modal]');
overlayBook.addEventListener('click', closeModal);

const closeModalBtn = document.querySelector('.modal-btn-close');
closeModalBtn.addEventListener('click', closeModal);

const booksChangeBtn = document.querySelector('.modal-btn-status');

const booksStatusText = document.querySelector('.modal-btn-status-text');

const bookSet = {
  bookID: '',
  do: false,
  booksTemp: {
    title: '',
    list_name: '',
    description: '',
    book_image: '',
    author: '',
    _id: '',
    buy_links: [],
  },
  bookExist: 0,
};

// load array of object from server
const getBooks = () => {
  return getBase()
    .then(array => {
      bookSet.bookExist = array;

      // console.log(array);
      changeBtText(array);
    })
    .catch(error => {
      console.log(error.message);
    });
};

// change text button (one button add/remove)
const changeBtText = data => {
  // print "remove..." if "id" book from server and select book match or no
  if (data.some(element => element._id === bookSet.bookID)) {
    booksChangeBtn.textContent = 'remove from shopping list';
    booksStatusText.style.visibility = 'visible';
    // key for sned/remove mode
    bookSet.do = true;
  } else {
    booksChangeBtn.textContent = 'add to shopping list';
    booksStatusText.style.visibility = 'hidden';
    // key for sned/remove mode
    bookSet.do = false;
  }
};

// add/remove books to/from server
let booksChange = () => {
  booksChangeBtn.disabled = true;
  // if there is no such book, add
  if (!bookSet.do) {
    // add book to srray
    bookSet.bookExist.push(bookSet.booksTemp);
    // send book to server // remove book if 'OK' then 'responce' = true
    addBase(bookSet.bookExist).then(responce => {
      booksChangeBtn.disabled = !responce;
      booksChangeBtn.textContent = 'remove from shopping list';
      booksStatusText.style.visibility = 'visible';
      // key for sned/remove mode
      bookSet.do = true;

      Notiflix.Notify.info(
        'The book has been successfully added to the book list ;)',
        { width: '360px' }
      );
    });
  } else {
    // remove book if 'OK' then 'responce' = true
    addBase(
      bookSet.bookExist.filter(element => element._id !== bookSet.bookID)
    ).then(responce => {
      //rewrite
      bookSet.bookExist = bookSet.bookExist.filter(
        element => element._id !== bookSet.bookID
      );

      booksChangeBtn.disabled = !responce;
      booksChangeBtn.textContent = 'add to shopping list';
      booksStatusText.style.visibility = 'hidden';
      // key for sned/remove mode
      bookSet.do = false;

      Notiflix.Notify.info(
        'The book has been successfully remove from the book list ;)',
        { width: '360px' }
      );
    });
  }
};

// search user
let existsUser = () => localStorage.getItem('bookshelId');

let userBooks = () => {
  // search user
  let getUserID = existsUser();

  if (!getUserID) {
    //massage;

    // deactivate button
    booksChangeBtn.disabled = true;
    booksChangeBtn.textContent = 'add to shopping list';
    booksChangeBtn.classList.add('dis');
    booksStatusText.classList.add('unlogin');
    booksStatusText.textContent =
      "Please, 'LogIn' if you want to add book to book list!";
    return;
  }

  // activate button
  booksChangeBtn.disabled = false;
  booksChangeBtn.classList.remove('dis');
  booksStatusText.classList.remove('.unlogin');

  // read book array data from LocalStorage
  getBooks();

  //add event handler
  booksChangeBtn.addEventListener('click', booksChange);
};

const jumpingEl = document.querySelectorAll('.jump-block');

// відкриття модалки
function openModal(event) {
  // console.log(event.target);
  event.preventDefault();
  if (!event.target.closest('.content_book')) {
    return;
  }
  document.addEventListener('keydown', onEsc);

  let paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';

  body.style.paddingRight = paddingOffSet;
  jumpingEl.forEach(el => {
    el.style.paddingRight = paddingOffSet;
  });

  // 'body' scroll off
  disableBodyScroll(targetModal);

  modalBook.classList.toggle('active');
  overlayBook.classList.toggle('active');
  bookSet.bookID = event.target.closest('a').dataset.id;
  addModalBookMarkup(bookSet.bookID);
}

//закриття модалки
function closeModal() {
  // 'body' scroll on
  enableBodyScroll(targetModal);
  document.removeEventListener('keydown', onEsc);
  body.classList.remove('scroll-lock');
  const paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';

  body.style.paddingRight = '0px';
  jumpingEl.forEach(el => {
    el.style.paddingRight = '0px';
  });

  modalBook.classList.toggle('hidden');
  modalBook.classList.toggle('active');
  overlayBook.classList.toggle('active');

  //remove event handler
  booksChangeBtn.removeEventListener('click', booksChange);
}

function addModalBookMarkup(bookID) {
  fetchBookById(bookID)
    .then(renderBook)
    .catch(e => {
      console.error(e);
    });
  // main work function of actions
  userBooks();
}

function renderBook(obj) {
  // console.log(obj);
  const book = obj.data;

  bookSet.booksTemp.title = book.title;
  bookSet.booksTemp.list_name = book.list_name;
  bookSet.booksTemp.author = book.author;
  bookSet.booksTemp.description =
    book.description || 'description will be added soon...';
  bookSet.booksTemp.book_image = book.book_image;
  bookSet.booksTemp._id = book._id;
  bookSet.booksTemp.buy_links = book.buy_links;

  document.querySelector('.modal-book-img-wrap').innerHTML = `<img src="${
    book.book_image || './images/shopping-list/Books.png'
  }" alt="${book.title || 'no image'}" />`;

  document.querySelector(
    '.modal-book-details'
  ).innerHTML = `<h1 class="modal-book-title">${book.title}</h1>
      <h2 class="modal-book-author">${book.author}</h2>
      <p class="modal-book-review">
        ${book.description || 'description will be added soon...'}
      </p>
      <ul class="modal-book-buy-list">
        <li>
          <a href="${
            book.buy_links.find(link => link.name === 'Amazon').url
          }" target="_blank"
            ><img class="modal-book-buy-link-img modal-book-amazon" src="${amazonImage}" width="62" height="19"> 
          </a>
        </li>
        <li>
          <a href="${
            book.buy_links.find(link => link.name === 'Apple Books').url
          }" target="_blank"
            ><img class="modal-book-buy-link-img modal-book-apple" src="${appleBookImage}" width="33" height="32">
          </a>
        </li>
        <li>
          <a href="${
            book.buy_links.find(link => link.name === 'Bookshop').url
          }" target="_blank"
            ><img class="modal-book-buy-link-img modal-book-shop" src="${bookShopImage}" width="38" height="36">
          </a>
        </li>
      </ul>`;
  modalBook.classList.toggle('hidden'); //perenis vidkruttya modalku
}

function onEsc(e) {
  if (e.code !== 'Escape') {
    return;
  }

  closeModal();
}
