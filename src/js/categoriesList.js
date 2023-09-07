import { fetchCategoriesList } from '../services/books-api';

import { fetchBooksByCategory } from '../services/books-api';

// імпорт функції, що рендерить розміттку по 5 книг бесцелеров
import { getTopBooks } from './content';

const refs = {
  container: document.querySelector(`.all-categories-box`),
  title: document.querySelector(`.all-categoris-title`),
  element: document.querySelector(`.all-categoris-element`),
  booksContainer: document.querySelector('.container-books'),
  categoriesList: document.querySelector('.all-categories-container'),
};

// визначаю місе куди буде рендериться розмітка кник відповідної категорії
const containerBook = document.querySelector('.container-books');

let elementHaveCurrent;

fetchCategoriesList()
  .then(response => {
    const categories = response.data;
    const markup = createMarkup(categories);
    refs.container.insertAdjacentHTML(`beforeend`, `${markup}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });

refs.title.classList.add('current');

refs.container.addEventListener(`click`, showCategoryBook);

function createMarkup(array) {
  return array
    .map(
      categori =>
        `<li class="all-categoris-list">
      <a class="all-categoris-element" href="" data-name="${categori.list_name}"
        >${categori.list_name}</a
      >
    </li>
      `
    )
    .join(``);
}

function showCategoryBook() {
  event.preventDefault();

  const clickedElement = event.target;

  if (
    !clickedElement.classList.contains('all-categoris-element') &&
    !clickedElement.classList.contains('all-categoris-title')
  ) {
    return;
  }

  const categoryName = clickedElement.dataset.name;

  changeCurrent(clickedElement);

  // якщо вибрано категорію `All categories`
  // рендеряться всі книги
  if (categoryName === `All categories`) {
    getTopBooks().then(resp => {
      if (window.innerWidth < 1439) {
        const titleCategory = document.querySelector(
          '.title-container-topBooks'
        );
        titleCategory.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    });
  }
  // якщо вибрана категорія то рендериться
  // розмітка всіх книг відповідної категорії
  else {
    refs.booksContainer.innerHTML = '';
    refs.categoriesList.classList.add('lock-click-categories');
    refs.booksContainer.classList.add('content-loader');
    getBooksFromCategories(categoryName);
  }
}

function changeCurrent(curentClic) {
  const allCategoryListItems = document.querySelectorAll(
    '.all-categoris-list a'
  );
  allCategoryListItems.forEach(item => {
    if (item.classList.contains('current')) {
      elementHaveCurrent = item;
    }
  });

  if (curentClic !== elementHaveCurrent) {
    curentClic.classList.add('current');
    elementHaveCurrent.classList.remove('current');
  }
}

function getBooksFromCategories(category) {
  fetchBooksByCategory(category)
    .then(response => {
      // console.log('Received data from server:', response.data);

      refs.booksContainer.classList.remove('content-loader');
      renderDataBooks(response.data, category);
      refs.categoriesList.classList.remove('lock-click-categories');
    })
    .then(resp => {
      if (window.innerWidth < 1439) {
        const titleCategory = document.querySelector(
          '.title-container-topBooks'
        );
        titleCategory.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function renderDataBooks(booksData, categoriBooks) {
  const words = categoriBooks.split(' ');
  const firstPart = words.slice(0, -1).join(' ');
  const secondPart = words[words.length - 1];

  const markupCategori = `<h1 class="title-container-topBooks">
    <span class="title_theme">${firstPart}</span>
    <span class="title_blue">${secondPart}</span></h1>`;

  const markup = booksData
    .map((book, indexBook) => {
      return `<li class="content_book" data-id=${book._id}>
            <a data-id=${book._id} href="${book.book_image}" class="content-book-link" >
         <img class="content__image" src="${book.book_image}" alt="${book.title}" loading="lazy" />
         
           <span class="content_textname" id="content_book_name">${book.title}</span>
           <span class="content_textauthor" id="content_book_name">${book.author}</span>
            </a>
          </li>`;
    })
    .join('');
  const markupList = `${markupCategori}<ul class="content_list_topBooks">${markup}</ul>`;
  containerBook.insertAdjacentHTML('beforeend', markupList);
}

// function autoScroll() {

//   document.getElementById(data).scrollIntoView({
//     block: 'start',
//     behavior: 'smooth',
//   });
// }
