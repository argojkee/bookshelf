import { fetchBookById } from '../services/books-api';

const BookContainer = document.querySelector('.container-books');
BookContainer?.addEventListener('click', openModal);

const modalBook = document.querySelector('[data-modal="1"]');

const overlayBook = document.querySelector('[data-modal]');
overlayBook.addEventListener('click', closeModal);

const closeModalBtn = document.querySelector('.modal-btn-close');
closeModalBtn.addEventListener('click', closeModal);

// відкриття модалки
function openModal(event) {
  event.preventDefault();
  //   console.log(event.target.closest('li'));
  if (!event.target.closest('li')) {
    return;
  } else {
    modalBook.classList.toggle('hidden');
    modalBook.classList.toggle('active');
    overlayBook.classList.toggle('active');
    let BookId = '643282b1e85766588626a0dc';
    addModalBookMarkup(BookId);
  }
}

//закриття модалки
function closeModal(event) {
  modalBook.classList.toggle('hidden');
  modalBook.classList.toggle('active');
  overlayBook.classList.toggle('active');
}

function addModalBookMarkup(bookID) {
  fetchBookById(bookID)
    .then(renderBook)
    .catch(e => {
      console.error(e);
    });
  //   console.log('add');
}

function renderBook(obj) {
  console.log(obj);
  const book = obj.data;
  document.querySelector('.modal-book-img-wrap').innerHTML = `<img src="${
    book.book_image || './images/shopping-list/Books.png'
  }" alt="${book.title || 'no image'}" />`;

  document.querySelector(
    '.modal-book-details'
  ).innerHTML = `<h1 class="modal-book-title">${book.title}</h1>
      <h2 class="modal-book-author">${book.author}</h2>
      <p class="modal-book-review">
        ${book.contributor}
      </p>
      <ul class="modal-book-buy-list">
        <li>
          <a href="${
            book.buy_links.find(link => link.name === 'Amazon').url
          }" target="_blank"
            ><svg width="24" height="24">
              <use href="./images/modal-logo/bi_book.svg"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="${
            book.buy_links.find(link => link.name === 'Apple Books').url
          }" target="_blank"
            ><svg width="24" height="24">
              <use href="./images/modal-logo/bi_book.svg"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="${
            book.buy_links.find(link => link.name === 'Bookshop').url
          }" target="_blank"
            ><svg width="24" height="24">
              <use href="./images/modal-logo/bi_book.svg"></use>
            </svg>
          </a>
        </li>
      </ul>`;
}
