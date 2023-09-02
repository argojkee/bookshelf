import axios from 'axios';

const STORAGE_KEY = 'shopping-list';
const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ipsa possimus debitis dignissimos ipsum consequuntur voluptatibus facere vero itaque magni, vel veniam delectus provident molestiae id libero totam excepturi perferendis!';

const refs = {
  ul: document.querySelector('.shopping-list'),
  shoppingListIsEmptyMessage: document.querySelector(
    '.shopping-list-is-empty-message'
  ),
  title: document.querySelector('.shopping-list-title'),
};

// axios.get(`https://books-backend.p.goit.global/books/category?category=Business Books&`).then(({data}) => {
//     console.log(data);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// });

const books = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (books) {
  refs.shoppingListIsEmptyMessage.style.display = 'none';
  createMarkup(books);
  refs.title.style.marginBottom = '40px';
}

refs.ul.addEventListener('click', deleteItem);

function createMarkup(books) {
  const markup = books
    .map(
      ({
        book_image,
        title,
        list_name,
        author,
        description,
        buy_links,
        _id,
      }) => {
        if (!description) {
          description = lorem;
        }

        const currentBuyLinks = buy_links
          .filter(
            ({ name }) =>
              name === 'Amazon' || name === 'Apple Books' || name === 'Bookshop'
          )
          .map(({ name, url }) => {
            if (name === 'Amazon') {
              return `<li class="shopping-list-buy-links-item">
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="shopping-list-buy-link">
                        <img src="#" class="shopping-list-buy-link-img" width="16" height="16">
                    </a>
                </li>`;
            }

            if (name === 'Apple Books') {
              return `<li class="shopping-list-buy-links-item">
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="shopping-list-buy-link">
                        <img src="#" class="shopping-list-buy-link-img" width="16" height="16">
                    </a>
                </li>`;
            }

            if (name === 'Bookshop') {
              return `<li class="shopping-list-buy-links-item">
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="shopping-list-buy-link">
                        <img src="#" class="shopping-list-buy-link-img" width="16" height="16">
                    </a>
                </li>`;
            }
          })
          .join('');

        return `<li class="shopping-list-item" data-id="${_id}">
        <img class="shopping-list-item-img" src="${book_image}" width="100" height="142">
            <div class="shopping-list-item-content-wrapper">
                <div class="shopping-list-item-head">
                    <div class="shopping-list-item-head-wrapper">
                        <h3 class="shopping-list-item-title">${title}</h3>
                        <p class="shopping-list-item-category">${list_name}</p>
                    </div>
                    <button type="button" class="shopping-list-delete-btn">
                        <svg class="delete-btn-icon" width="16" height="16">
                            <use class="delete-btn-icon-use" xlink:href="#icon-trash">
                        </svg>
                    </button>
                </div>
            

                <p class="shopping-list-item-description">${description}</p>

                <div class="shopping-list-item-bottom-wrapper">
                    <p class="shopping-list-item-author">${author}</p>

                    <ul class="shopping-list-buy-links-list">${currentBuyLinks}</ul>
                </div>
            </div>
    </li>`;
      }
    )
    .join('');

  refs.ul.innerHTML = markup;
}

function deleteItem(event) {
  if (
    event.target.classList.contains('delete-btn-icon-use') ||
    event.target.classList.contains('delete-btn-icon') ||
    event.target.nodeName === 'BUTTON'
  ) {
    const itemId = event.target.closest('.shopping-list-item').dataset.id;
    const books = JSON.parse(localStorage.getItem(STORAGE_KEY));

    const filteredBooks = books.filter(({ _id }) => _id !== itemId);
    localStorage.removeItem(STORAGE_KEY);
    refs.shoppingListIsEmptyMessage.style.display = 'flex';

    // refs.title.style.marginBottom = '120px';
    if (document.documentElement.clientWidth < 768) {
      refs.title.style.marginBottom = '120px';
    } else {
      refs.title.style.marginBottom = '140px';
    }

    if (filteredBooks.length !== 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredBooks));
      refs.shoppingListIsEmptyMessage.style.display = 'none';
      refs.title.style.marginBottom = '40px';
    }

    createMarkup(filteredBooks);
  }

  return;
}
