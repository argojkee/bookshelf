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

const HowManyBooksToLoad = 5;
const containerBook = document.querySelector('.container-books');

getTopBooks();

export function getTopBooks() {
  containerBook.innerHTML = '';
  fetchToAllBooks()
    .then(result => {
      return result.data;
    })
    .then(renderData)
    .catch(errorfetchData);
}

function getBooksByCat(butElem, category) {
  fetchBooksByCategory(category)
    .then(result => {
      return result.data;
    })
    .then(data => {
      renderDataBycat(butElem, data);
    })
    .catch(errorfetchData);
}

export function renderDataBycat(butElem, data) {
  if (data.length === 0) {
    //немає книг, потрібно показати картинку про це');
    // let markup = renderError(data);
    // containerBook.insertAdjacentHTML('beforeend', markup);
    return;
  }
  const beforeSeeMore = document.querySelector('.content_btnSeeMore');
  let markup = createMarkupWithFiveBooks(butElem,data);
  const ulElem = butElem.previousElementSibling;
  
  // beforeSeeMore.insertAdjacentHTML('beforebegin', markup);
  butElem.previousElementSibling.insertAdjacentHTML('beforeend', markup);

  //на елемент повішати маркуп!!!!!!!!!!
}

//якщо дані витягуємо вдало, то кладемо їх в масив
function renderData(data) {
  containerBook.insertAdjacentHTML('beforeend', '');
  if (data.length === 0) {
    //немає книг, потрібно показати картинку про це');
    // let markup = renderError(data);
    // containerBook.insertAdjacentHTML('beforeend', markup);
    return;
  }

  let markup = renderMarkupTopBooks(data);
  containerBook.insertAdjacentHTML('beforeend', markup);
}

//якщо помилка, то оброблюємо помилку
function errorfetchData(error) {
  let markup = renderError(error);
  containerBook.insertAdjacentHTML('beforeend', markup);
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
                          <p id="content_book_name">${book.title}</p>
                          <p id="content_book_author">${book.author}</p>
                </li>`;
      }
    })
    .join('');
  numberOfBooksShown += HowManyBooksToLoad;
  console.log();
  return markup;
}

function hiddenBtnSeeMore(elem) {
  elem.classList.add("hidden");
}
