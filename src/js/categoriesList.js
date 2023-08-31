import { fetchCategoriesList } from '../services/books-api';

const refs = {
  container: document.querySelector(`.categories-container`),
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
            <li class="list-category">${categori.list_name}</li>
        </ul> 
        `
    )
    .join(``);
}
