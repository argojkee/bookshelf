import amazonImage from '../images/bookMarkets/bookMarkets-x1/amazon.webp';
import appleBookImage from '../images/bookMarkets/bookMarkets-x1/tradeBook2.webp';
import bookshopImage from '../images/bookMarkets/bookMarkets-x1/tradeBook3.webp';
import { getBase, addBase } from './loginApi';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const refs = {
  ul: document.querySelector('.shopping-list'),
  shoppingListIsEmptyMessage: document.querySelector(
    '.shopping-list-is-empty-message'
  ),
  title: document.querySelector('.shopping-list-title'),
  container: document.getElementById('pagination'),
};

const options = {
  itemsPerPage: 3,
  visiblePages: 3,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn pagination-page">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn pagination-page tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn pagination-page tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn pagination-page tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn pagination-page tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};

if (document.documentElement.clientWidth < 768) {
  options.itemsPerPage = 4;
  options.visiblePages = 2;
}

getBase()
  .then(data => {
    if (data.length !== 0) {
      refs.shoppingListIsEmptyMessage.style.display = 'none';
      paginatePages(data);
      refs.title.style.marginBottom = '40px';
    } else {
      refs.shoppingListIsEmptyMessage.style.display = 'flex';

      if (document.documentElement.clientWidth < 768) {
        refs.title.style.marginBottom = '120px';
      } else {
        refs.title.style.marginBottom = '140px';
      }
    }
  })
  .catch(error => console.log(error));

refs.ul.addEventListener('click', deleteItem);

function createMarkup(books) {
  // console.log(books);
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

        const currentBuyLinks = buy_links
          ?.filter(
            ({ name }) =>
              name === 'Amazon' || name === 'Apple Books' || name === 'Bookshop'
          )
          .map(({ name, url }) => {
            if (name === 'Amazon') {
              return `<li class="shopping-list-buy-links-item">
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="shopping-list-buy-link">
                        <img src="${amazonImage}" class="shopping-list-buy-link-img amazon" alt="${name}" width="32" height="11">
                    </a>
                </li>`;
            }

            if (name === 'Apple Books') {
              return `<li class="shopping-list-buy-links-item">
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="shopping-list-buy-link">
                        <img src="${appleBookImage}" class="shopping-list-buy-link-img apple-book" alt="${name}" width="16" height="16">
                    </a>
                </li>`;
            }

            if (name === 'Bookshop') {
              return `<li class="shopping-list-buy-links-item">
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="shopping-list-buy-link">
                        <img src="${bookshopImage}" class="shopping-list-buy-link-img bookshop" alt="${name}" width="16" height="16">
                    </a>
                </li>`;
            }
          })
          .join('');

        return `<li class="shopping-list-item" data-id="${_id}">
        <img class="shopping-list-item-img" src="${book_image}" alt="${title}" width="100" height="142">
            <div class="shopping-list-item-content-wrapper">
                <div class="shopping-list-item-head">
                    <div class="shopping-list-item-head-wrapper">
                        <h3 class="shopping-list-item-title">${title}</h3>
                        <p class="shopping-list-item-category">${list_name}</p>
                    </div>
                    <button type="button" class="shopping-list-delete-btn" aria-label="delete-button">
                        <svg class="delete-btn-icon" aria-label="trash-icon" width="16" height="16">
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

function paginatePages(arr) {
  const lengthOfArr = arr.length;
  options.totalItems = lengthOfArr;

  if(lengthOfArr < options.page * 3 - 2) {
    options.page -= 1;
  }

  if(lengthOfArr === 0 || lengthOfArr < 4) {
    refs.container.style.display = 'none';
  }
  
  const pagination = new Pagination(refs.container, options);

  const pageToDraw = arr.slice((3 * options.page - 3), (3 * options.page));

  createMarkup(pageToDraw);

  pagination.on('afterMove', (event) => {
    const currentPage = event.page;
    options.page = currentPage;
    const pageContent = arr.slice((3 * currentPage - 3), (3 * currentPage));
    createMarkup(pageContent);
  });
}

async function deleteItem(event) {
  if (
    event.target.classList.contains('delete-btn-icon-use') ||
    event.target.classList.contains('delete-btn-icon') ||
    event.target.nodeName === 'BUTTON'
  ) {
    const itemId = event.target.closest('.shopping-list-item').dataset.id;
    const books = await getBase();

    const filteredBooks = books?.filter(({ _id }) => _id !== itemId);
    addBase(filteredBooks);
    refs.shoppingListIsEmptyMessage.style.display = 'flex';

    if (document.documentElement.clientWidth < 768) {
      refs.title.style.marginBottom = '120px';
    } else {
      refs.title.style.marginBottom = '140px';
    }

    if (filteredBooks.length !== 0) {
      refs.shoppingListIsEmptyMessage.style.display = 'none';
      refs.title.style.marginBottom = '40px';
    }

    paginatePages(filteredBooks);
  }
}
