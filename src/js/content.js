
import { fetchToAllBooks, fetchBooksByCategory } from '../services/books-api';
import {
  renderMarkupTopBooks,
  createMarkupBooksByCategory,
  countTopBooks,
  renderError,
  arrayBooksByCategory,
} from './contentFunctions';

//кі-сть загружених книг однієї категорії після того, як користувач натиснув на кнопку SEEMORE
let numberOfBooksShown = countTopBooks();
//категорія, по кнопкі якій натиснули
let selectedCategory = '';


const HowManyBooksToLoad = 3;
const containerBook = document.querySelector('.container-books');
const content = document.querySelector('.content');
const categoryItem = document.querySelector('.content_category');

containerBook.innerHTML = `<div class="content-error"> 
              <img 
              src="${require('../images/shopping-list/Books.png')}"
              alt="error"
              class="content_imgError"/>
         </div>`;

getTopBooks();

function getTopBooks() {
    fetchToAllBooks()
        .then(response => {
            return response
        })
        .then(renderData)
        .catch(errorfetchData);
}
export function getTopBooks() {
<<<<<<< Updated upstream
  fetchToAllBooks().then(result => { return result.data }).then(renderData).catch(errorfetchData);

=======
  console.log(fetchToAllBooks);
  fetchToAllBooks()
    .then(result => {
      return result.data;
    })
    .then(renderData);
>>>>>>> Stashed changes
}

function getBooksByCat(butElem, category) {
  fetchBooksByCategory(category)
    .then(result => {
      return result.data;
    })
    .then(data => {
      renderDataBycat(butElem, data);
    })
    .catch();
}

export function renderDataBycat(butElem, data) {
  if (data.length === 0) {
    //немає книг, потрібно показати картинку про це');
    // let markup = renderError(data);
    // containerBook.insertAdjacentHTML('beforeend', markup);
    return;
  }
  const beforeSeeMore = document.querySelector('.content_btnSeeMore');
  let markup = createMarkupWithFiveBooks(butElem, data);
  const ulElem = butElem.previousElementSibling;

  // beforeSeeMore.insertAdjacentHTML('beforebegin', markup);
  butElem.previousElementSibling.insertAdjacentHTML('beforeend', markup);

  //на елемент повішати маркуп!!!!!!!!!!
}

//якщо дані витягуємо вдало, то кладемо їх в масив
function renderData(data) {
<<<<<<< Updated upstream
    containerBook.insertAdjacentHTML('beforeend', '');
=======
  containerBook.innerHTML = '';
  console.log('!!!!!!!!!!!!!!!!!');
  // containerBook.insertAdjacentHTML('beforeend', '');
>>>>>>> Stashed changes
  if (data.length === 0) {
    //немає книг, потрібно показати картинку про це');
    // let markup = renderError(data);
    // containerBook.insertAdjacentHTML('beforeend', markup);
    return;
  }

  let markup = renderMarkupTopBooks(data);
  // containerBook.insertAdjacentHTML('beforeend', markup);
  containerBook.innerHTML = markup;
}

//якщо помилка, то оброблюємо помилку
function errorfetchData(error) {
  console.log('sdasda');
  let markup = renderError(error);
  content.innerHTML = markup;
}

const test = document.querySelector('.container-books');
test.addEventListener('click', handleSumitSeeMore);

function handleSumitSeeMore(e) {
  e.preventDefault();
  if (e.target.type !== 'button') {
    return;
  }

  //якщо натиснули на нову категорію, то скидаємо параметри і заново беремо список книг
  if (e.target.name !== selectedCategory) {
    numberOfBooksShown = countTopBooks();
  }

  selectedCategory = e.target.name;
  getBooksByCat(e.target, selectedCategory);

  //ТУТ З МАСИВОМ НЕ ПОТРІБНО ПРАЦЮВАТИ!!!
}

//видаляємо з масиву перші пять елементів
function deleteFiveElementsFromArray() {
  for (let i = 1; i === arrayBooks.length; i++) {
    if (i <= HowManyBooksToLoad) {
      arrayBooks.shift();
    } else {
      return;
    }
  }
}

function createMarkupWithFiveBooks(elem, arrayBooks) {
  let counter = 0;
  let markup = arrayBooks
    .map((book, index) => {
      if (index >= numberOfBooksShown && counter < HowManyBooksToLoad) {
        counter += 1;

        //якщо загрузили останню книгу, то видаляємл кнопку
        if (index + 1 === arrayBooks.length) {
          hiddenBtnSeeMore(elem);
        }
        return `<li id="${book._id}"class="content_book">
                          <a  href="${book.book_image}" >
                          <img class="content__image" src="${book.book_image}" alt="${book.title}" loading="lazy" />
                          </a>
                          <span class="content_textname"><p id="content_book_name">${book.title}</p></span>
                          <span class="content_textauthor"><p id="content_book_author">${book.author}</p></span>
                </li>`;
      }
    })
    .join('');
  numberOfBooksShown += HowManyBooksToLoad;
  console.log();
  return markup;
}

function hiddenBtnSeeMore(elem) {
<<<<<<< Updated upstream
  elem.classList.add("hidden");
}
=======
  elem.classList.add('hidden');
}
>>>>>>> Stashed changes
