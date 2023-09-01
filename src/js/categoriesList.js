import { fetchCategoriesList } from '../services/books-api';

import { fetchBooksByCategory } from '../services/books-api';


// імпорт функції, що рендерить розміттку по 5 книг бесцелеров
import { getTopBooks } from './content';


const refs = {
  container: document.querySelector(`.all-categories-box`),
  title: document.querySelector(`.all-categoris-title`),
  element: document.querySelector(`.all-categoris-element`),
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

  if (!clickedElement.classList.contains('all-categoris-element') 
  && !clickedElement.classList.contains('all-categoris-title')) {
    return
  };

  const categoryName = clickedElement.dataset.name;
  console.log(`Clicked on category: ${categoryName}`);
  changeCurrent(clickedElement);

  
  // якщо вибрано категорію `All categories` 
  // рендеряться всі книги
  if (categoryName === `All categories`) {
    getTopBooks();
  } 
  // якщо вибрана категорія то рендериться 
  // розмітка всіх книг відповідної категорії
  else {

    getBooksFromCategories(categoryName);
  }

}
  
function changeCurrent(curentClic) {

  const allCategoryListItems = document.querySelectorAll('.all-categoris-list a');
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
      console.log('Received data from server:', response.data);
      containerBook.innerHTML = '';
      renderDataBooks(response.data); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// function renderDataBooks(booksData){
//   const markup = booksData
//     .map((katItem, index) => {
//       const booksMarkup = katItem.books
//         .map((book, indexBook) => {
//           let count = countTopBooks(indexBook);
//           return `<li class="content_book  ${
//             indexBook >= count ? 'hidden' : ''
//           }">
//           <a  href="${book.book_image}" >
//           <img class="content__image" src="${book.book_image}" alt="${
//             book.title
//           }" loading="lazy" />
//           </a>
//           <p id="content_book_name">${book.title}</p>
//           <p id="content_book_author">${book.author}</p>
//           </li>`;
//         })
//         .join('');

//     containerBook.insertAdjacentHTML('beforeend', markup);
// }
// }