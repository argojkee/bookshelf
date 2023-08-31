import { fetchCategoriesList } from '../services/books-api';

const refs = {
    container: document.querySelector(`.categories-container`),
};

console.log(`privet`);

fetchCategoriesList()
  .then(response => {
      const categories = response.data;
      const markup = createMarkup(categories);    
      refs.container.insertAdjacentHTML(`afterbegin`,
          `<h2 class="title-categoris">All categories</h2>${markup}`);  
      
      console.log('array0', categories[0]);
      console.log('array1', categories[1]);
      console.log('Categories list:', categories);
      
  })
  .catch(error => {
    console.error('Error:', error);
  });

  

function createMarkup(array) { 
    return array.map(categori => 
        `<ul>
            <li class="list-category">${categori.list_name}</li>
        </ul> 
        `
        ).join(``);
}