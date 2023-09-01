//ф-ція для створення розмітки, яка видає топ книг
export function renderMarkupTopBooks(array) {
  const markup = `<ul class="content_list_categories">${array
    .map((katItem, index) => {
      return `<li><span>${
        katItem.list_name
      }</span><ul class="content_list_topBooks" style="display:flex">${katItem.books
        .map((book, indexBook) => {
          let count = countTopBooks(indexBook);
          return `<li class="content_book  ${
            indexBook >= count ? 'hidden' : ''
          }">
          <a  href="${book.book_image}" >
          <img class="content__image" src="${book.book_image}" alt="${
            book.title
          }" loading="lazy" />
          </a>
          <p id="content_book_name">${book.title}</p>
          <p id="content_book_author">${book.author}</p>
          </li>`;
        })
        .join('')}</ul>
          <div class="content_container_btn">
                <button type="button" class="content_btnSeeMore" action="submit">SEE MORE</button>
       </div>
       </li>`;
    })
    .join('')}</ul>`;

  // const btnSeeMore = document.querySelector('.content_container_btn');
  // btnSeeMore.addEventListener('submit', handleSumitSeeMore);
  return markup;
}

function handleSumitSeeMore(e) {
  e.preventDefault();
  // далі узнати категорію на яку клацнули
}

// визначаємо, кількість книг в одній категорії в залежності від розміру екрана
function countTopBooks(index) {
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
