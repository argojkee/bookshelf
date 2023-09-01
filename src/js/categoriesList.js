import { fetchCategoriesList } from '../services/books-api';

const refs = {
  container: document.querySelector(`.all-categories-box`),
};

console.log(`privet`);

fetchCategoriesList()
  .then(response => {
    const categories = response.data;
    const markup = createMarkup(categories);
    refs.container.insertAdjacentHTML(
      `afterbegin`,
      `${markup}`
    );
  })
  .catch(error => {
    console.error('Error:', error);
  });

function createMarkup(array) {
  return array
    .map(
      categori =>
        `<ul>
            <li class="all-categoris-list">${categori.list_name}</li>
        </ul> 
        `
    )
    .join(``);
}
