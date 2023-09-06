import Notiflix from 'notiflix';
import { fetchToAllBooks, fetchBooksByCategory } from '../services/books-api';
import { renderMarkupTopBooks, countTopBooks } from './contentFunctions';

//кі-сть загружених книг однієї категорії після того, як користувач натиснув на кнопку SEEMORE
let numberOfBooksShown = countTopBooks();
const HowManyBooksToLoad = 5;

<<<<<<< Updated upstream
const spanLoader = document.querySelector('content_loadBooks');
=======
const categoriesList = document.querySelector('.all-categories-container');
>>>>>>> Stashed changes
const containerBook = document.querySelector('.container-books');
const content = document.querySelector('.content');
containerBook.innerHTML = `<div class="content-error"> 
              <img 
              src="${require('../images/shopping-list/Books.png')}"
              alt="error"
              class="content_imgError"/>
         </div>`;

getTopBooks();

export function getTopBooks() {
  containerBook.innerHTML = '';
  fetchToAllBooks()
    .then(result => {
      return result.data;
    })
    .then(data => {
      content.classList.remove('content-loader');
      containerBook.innerHTML = renderMarkupTopBooks(data);
    });
}

function getBooksByCat(butElem) {
  butElem.innerHTML = '';
  butElem.classList.add('loaderBTN');


  fetchBooksByCategory(butElem.name)
    .then(result => {
      butElem.classList.remove('loader');
      return result.data;
    })
    .then(data => {
      butElem.classList.remove('loaderBTN');
      renderDataBycat(butElem, data);
      butElem.innerHTML = 'SEE MORE';
    })
    .catch();
}

//ф-ція оброблює дані по конкретній категорії - малює розмітку та вставляє її перед кнопкой
export function renderDataBycat(butElem, data) {
  let markup = createMarkupOfBooksOneCategory(butElem, data);
  butElem.previousElementSibling.insertAdjacentHTML('beforeend', markup);
}

const containerBooks = document.querySelector('.container-books');
containerBooks.addEventListener('click', handleSumitSeeMore);

function handleSumitSeeMore(e) {
  e.preventDefault();
  if (e.target.type !== 'button') {
    return;
  }
 
  getBooksByCat(e.target);
 
}


function hiddenBtnSeeMore(elem) {
  elem.classList.add('hidden');
}

//ф-ція малює розмітку з книгами однієї категорії
function createMarkupOfBooksOneCategory(elem, arrayBooks) {
  let markup = arrayBooks
    .map((book, index) => {
      if (index >= numberOfBooksShown) {
        //якщо загрузили останню книгу, то видаляємо кнопку
        if (index + 1 === arrayBooks.length) {
          hiddenBtnSeeMore(elem);
          //якщо категорії не закінчились, то не робимо анімацію для зголовка
          //наступної категорії, т к їїнемає
          if (elem.parentNode.nextSibling != null) {
            elem.parentNode.nextSibling.firstElementChild.classList.add(
              'contend_categoryMove'
            );
          }

          Notiflix.Notify.info('this is all. Check out other category books');
        }

        return `<li class="content_book">
                          <a data-id=${book._id} href="${book.book_image}" class="content-book-link" >
                          <img class="content__image" src="${book.book_image}" alt="${book.title}" loading="lazy" />
                          
                          <span class="content_textname" id="content_book_name">${book.title}</span>
                          <span class="content_textauthor" id="content_book_author">${book.author}</span>
                          </a>
                </li>`;
      }
    })
    .join('');
  return markup;
}

//налаштування для Notflix
Notiflix.Notify.init({
  width: '480px',
  position: 'right-bottom',
  distance: '10px',
  opacity: 1,
  fontSize: '20px',
  clickToClose: true,
  timeout: 3000,
  background: '#4f2ee8',
});
