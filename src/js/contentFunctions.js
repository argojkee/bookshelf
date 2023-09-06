//ф-ція для створення розмітки, яка видає топ книг
export function renderMarkupTopBooks(array) {
  const markup = ` <h1 class="title-container-topBooks"><span class="title_theme">Best sellers</span> <span class="title_blue"> books </span></h1>
  <ul class="content_list_categories">${array
    .map(kategory => {
      return `<li class="content_categoryItem ${kategory.list_name}">
      <h3 class="content_category">${kategory.list_name}</h3>
                <ul class="content_list_topBooks">${kategory.books
                  .map((book, indexBook) => {
                    // if (indexBook < countTopBooks()) {
                    return `<li class="${
                      indexBook === 1 || indexBook === 2
                        ? 'content_book tablet-book'
                        : indexBook === 3 || indexBook === 4
                        ? 'content_book mobile-book'
                        : 'content_book'
                    }">
                          <a data-id=${book._id} href="${
                      book.book_image
                    }"  class="content-book-link" >
                        
                          <img class="content__image" src="${
                            book.book_image
                          }" alt="${book.title}" loading="lazy" />
                         
                          <span class="content_textname" id="content_book_name">${
                            book.title
                          }</span>
                          <span class="content_textauthor" id="content_book_name">${
                            book.author
                          }</span>
                           </a>
                          </li>`;
                    // }
                  })
                  .join('')}</ul>
          
                
                <button class="content_btnSeeMore"
                        type="button"
                        name="${kategory.list_name}" 
                        action="submit">SEE MORE                        
                </button>
                <span class="content_loaderBTN" style="display: none"></span>
                                                           
          </li>`;
    })
    .join('')}</ul>`;
  return markup;
}

// ф-ція приймає книги однієї категорії з бєкенду, вертає масив з книгами цієї категорії
export function arrayBooksByCategory(array) {
  return (books = array.map(book => {
    return book;
  }));
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
    // для більших за планшет
  } else if (document.documentElement.clientWidth > 1439) {
    return 5;
  }
}

export function renderError() {
  return `<div class="content-error">
              <img
              src="${path}"
              alt="error"
              width="400"
              height="400"
              class="content_imgError"/>
         </div>`;
}
