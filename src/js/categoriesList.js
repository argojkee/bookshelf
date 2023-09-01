import { fetchCategoriesList } from '../services/books-api';

const refs = {
  container: document.querySelector(`.all-categories-box`),
  title: document.querySelector(`.all-categoris-title`),
  element: document.querySelector(`.all-categoris-element`),
};

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

  const categoryName = clickedElement.dataset.name;
  console.log(`Clicked on category: ${categoryName}`);
  changeCurrent(clickedElement);
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
