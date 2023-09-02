import { fetchBookById } from '../services/books-api';
import { getBase, addBase } from '/src/js/loginApi.js';
import amazonImage from '../images/bookMarkets/bookMarkets-x1/amazon.webp';
import appleBookImage from '../images/bookMarkets/bookMarkets-x1/tradeBook2.webp';
import bookShopImage from '../images/bookMarkets/bookMarkets-x1/tradeBook3.webp';


const BookContainer = document.querySelector('.container-books');
BookContainer?.addEventListener('click', openModal);

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
  booksArr: {title: '', list_name: '', description: '', book_image: '', author: '', _id: '', buy_links: ''},
  bookExist: 0,
};

const getBooks = () => {
   
  return getBase().then(array => {

    return array;

  }).catch(() => {

      //message
  });
}

const changeBtText = (data) => {
  
    if(data.some(element => element._id === bookSet.bookID)){
      booksChangeBtn.textContent = "remove from shopping list";
      booksStatusText.style.visibility = "hidden";
      bookSet.do = true;
    } else {
      booksChangeBtn.textContent = "add to shopping list";
      booksStatusText.style.visibility = "visible";
      bookSet.do = false;
    }

}

let booksChange = () => {

  if(!bookSet.do)
  {
    bookSet.bookExist.push(bookSet.booksArr);
    addBase(bookSet.bookExist);
    return;
  } 

  addBase(bookSet.bookExist.filter(element => element._id !== bookSet.bookID));
  
};

// search user
let existsUser = () => localStorage.getItem('bookshelId');

let userBooks = () => {

  // search user
  let getUserID = existsUser(); 

  if(getUserID.length === 0) { //massage;
    booksChangeBtn.style.visibility = "hidden";
      return;
  }

  booksChangeBtn.style.visibility = "visible";
  // read book array data from LocalStorage
  getBooks().then(responce => {
    
    bookSet.bookExist = responce;
    // console.log(bookSet.bookID);
    console.log(responce);
    changeBtText(responce);

  }).catch(() => {

  });

  booksChangeBtn.addEventListener('click', booksChange);
}

// відкриття модалки
function openModal(event) {
  event.preventDefault();
  //   console.log(event.target.closest('li'));
  if (!event.target.parentNode === 'a') {
    return;
  }
 
  modalBook.classList.toggle('active');
  overlayBook.classList.toggle('active');
  bookSet.bookID = event.target.parentNode.dataset.id;
  addModalBookMarkup(bookSet.bookID);
}

//закриття модалки
function closeModal() {
  modalBook.classList.toggle('hidden');
  modalBook.classList.toggle('active');
  overlayBook.classList.toggle('active');
}

async function addModalBookMarkup(bookID) {
  fetchBookById(bookID)
    .then(renderBook)
    .catch(e => {
      console.error(e);
    });
  //   console.log('add');

  userBooks();
}

function renderBook(obj) {
  // console.log(obj);
  const book = obj.data;

  bookSet.booksArr.title = book.title;
  bookSet.booksArr.list_name = book.list_name;
  bookSet.booksArr.author = book.author;
  bookSet.booksArr.description = book.description;
  bookSet.booksArr.book_image = book.book_image;
  bookSet.booksArr._id = book._id;
  bookSet.booksArr.buy_links = book.buy_links;


  document.querySelector('.modal-book-img-wrap').innerHTML = `<img src="${
    book.book_image || './images/shopping-list/Books.png'
  }" alt="${book.title || 'no image'}" />`;

  document.querySelector(
    '.modal-book-details'
  ).innerHTML = `<h1 class="modal-book-title">${book.title}</h1>
      <h2 class="modal-book-author">${book.author}</h2>
      <p class="modal-book-review">
        ${book.description}
      </p>
      <ul class="modal-book-buy-list">
        <li>
          <a href="${
            book.buy_links.find(link => link.name === 'Amazon').url
          }" target="_blank"
            ><img class="modal-book-amazon" src="${amazonImage}"> 
          </a>
        </li>
        <li>
          <a href="${
            book.buy_links.find(link => link.name === 'Apple Books').url
          }" target="_blank"
            ><img class="modal-book-apple" src="${appleBookImage}">
          </a>
        </li>
        <li>
          <a href="${
            book.buy_links.find(link => link.name === 'Bookshop').url
          }" target="_blank"
            ><img class="modal-book-shop" src="${bookShopImage}">
          </a>
        </li>
      </ul>`;
      modalBook.classList.toggle('hidden'); //perenis vidkruttya modalku
}
