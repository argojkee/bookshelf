// export const category_books = [];

//ф-ція для створення розмітки, яка видає топ книг
export function renderMarkupTopBooks(array) {
  const markup = ` <h1 class="title-container-topBooks">Best sellers <span class="title_blue"> books </span></h1>
  <ul class="content_list_categories">${array
    .map(kategory => {
      return `<li class="${kategory.list_name}" content_categoryItem"><span class="content_category">***********${
        kategory.list_name
      }</span>
                <ul class="content_list_topBooks">${kategory.books
                  .map((book, indexBook) => {
                    if (indexBook < countTopBooks()) {
                      return `<li id="${book._id}" class="content_book">
                          <a  href="${book.book_image}" >
                          <img class="content__image" src="${book.book_image}" alt="${book.title}" loading="lazy" />
                          </a>
                          <p id="content_book_name">${book.title}</p>
                          <p id="content_book_author">${book.author}</p>
                          </li>`;
                    }
                  })
                  .join('')}</ul>
          
                <button type="button" name="${kategory.list_name}" 
                class="content_btnSeeMore" action="submit">SEE MORE</button>
         
          </li>`;
    })
    .join('')}</ul>`;

  return markup;
}

// ф-ція приймає книги однієї категорії з бєкенду, вертає масив з книгами цієї категорії
export function arrayBooksByCategory(array) {
  return books = array.map(book => {
    return book
  })
}


// визначаємо, кількість книг в одній категорії в залежності від розміру екрана
export function countTopBooks() {
  if (document.documentElement.clientWidth < 768) {
    return 1;
  } else if (
    document.documentElement.clientWidth > 767 &&
    document.documentElement.clientWidth < 1440
  ) {
    return 3;
  } else if (document.documentElement.clientWidth > 1439) {
    return 5;
  }
}

export function renderError(error) {
  return `<div class="content-error">
         ERROR
    </div>`;
}
