import { fetchToAllBooks } from '../services/books-api';
import { renderMarkupTopBooks, renderError } from './contentFunctions';

const containerBook = document.querySelector('.container-books');

getTopBooks();

function getTopBooks() {
  fetchToAllBooks()
    .then(response => {
      return response.json();
    })
    .then(renderData)
    .catch(errorfetchData);
}

//якщо дані витягуємо вдало, то кладемо їх в масив
function renderData(data) {
  if (data.length === 0) {
    //немає книг, потрібно показати картинку про це');
    let markup = renderError(data);
    containerBook.insertAdjacentHTML('beforeend', markup);
    console.log(markup);
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



