const BASE_URL = 'https://books-backend.p.goit.global/books/';

export const fetchCategoriesList = () => {
  return fetch(`${BASE_URL}category-list`);
};

export const fetchToAllBooks = () => {
  return fetch(`${BASE_URL}top-books`);
};

export const fetchBooksByCategory = async categoryName => {
  return await fetch(`${BASE_URL}category?category=${categoryName}`);
};

export const fetchBookById = bookId => {
  return fetch(`${BASE_URL}${bookId}`);
};
