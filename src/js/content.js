import { fetchToAllBooks } from '../services/books-api';

const containerBook = document.querySelector('.container-books');

getTopBooks();

function getTopBooks() {
  fetchToAllBooks().then((response) => {
    return response.json();
  }).then(renderData).catch(errorfetchData);
}

//якщо дані витягуємо вдало, то кладемо їх в масив
function renderData(data) {
  if (data.length === 0) {
    console.log('немає книг, потрібно показати картинку про це');
    return;
  }

  // renderMarkupTopBooks(data);
  let markup = renderMarkupTopBooks(data);
  containerBook.insertAdjacentHTML('beforeend', markup);
  console.log(markup);
}

//якщо помилка, то оброблюємо помилку
function errorfetchData(error) {
  console.log(error);
}

//ф-ція для створення розмітки, яка видає топ книг
export function renderMarkupTopBooks(array) {
    let markup = "";

    array.map(({ list_name, books }) => {

        markup += `<ul class="content_categoty_item">
        <span class="content_kategory_name">*****${list_name}</span>`;
        
        books.map(({ author, book_image, title }, index) => {
            let count = 0;
            if (document.documentElement.clientWidth < 768) {
              count = 1;
            } else if (document.documentElement.clientWidth < 1439) {
              count = 3;
            } else if (document.documentElement.clientWidth > 1440) {
              count = 5;
            }
            
              markup += `               
       <li class="content_part ${index >= count? "hidden": ""}"> 

           <a class="content__link" href="${book_image}" >
             <img class="content__image" src="${book_image}" alt="${title}" loading="lazy"  />
           </a>           
            <p id="content_book_name">${title}</p>
            <p id="content_book_author">${author}</p>
            
        </li>`;
 
        })
         markup += `
            <div class="btn_seeMore">
                <button type="button" class="btn" data-action="save">SEE MORE</button>
            </div>`;
         markup += `</ul>`;
    })
    
    return markup;
};