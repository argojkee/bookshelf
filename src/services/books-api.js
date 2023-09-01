import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

export const fetchCategoriesList = () => {
  return axios.get(`${BASE_URL}category-list`);
};

export const fetchToAllBooks = () => {
  return axios.get(`${BASE_URL}top-books`);
};

export const fetchBooksByCategory = categoryName => {
  return axios.get(`${BASE_URL}category?category=${categoryName}`);
};

export const fetchBookById = bookId => {
  return axios.get(`${BASE_URL}${bookId}`);
};
