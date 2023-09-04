import { getName } from './loginApi';

const menuModalbtn = document.querySelector('.js-cross-switch');
const menuBurger = document.querySelector('.modal-burger');
const logOutBtn = document.querySelector('.section-burger_logOut');
const logInBtn = document.querySelector('.section-burger_SingUp');
const modalLogin = document.querySelector('.loginBacdropLogIn');
const userInfo = document.querySelector('.modal-user');
const linkList = document.querySelector('.section-burger_list');
const backdropBurger = document.querySelector('.backdrop-burger');
const homeLinkBurger = document.querySelector('.section-burger_item');
const shoppingLinkBurger = document.querySelector('.section-burger_item-cart');
const listBurgerLinks = document.querySelector('.section-burger_list');
const userTextBurger = document.querySelector('.modal-user_title');
const bodyEl = document.querySelector('body');
const addPhotoContainer = document.querySelector('.image-btn-burger-container');

listBurgerLinks.addEventListener('click', onBurgerLinkClick);

if (localStorage.getItem('bookshelId')) {
  getName(localStorage.getItem('bookshelId')).then(name => {
    userTextBurger.textContent = name;
  });
}

if (window.location.href.includes('shopping')) {
  shoppingLinkBurger.classList.add('current');
  homeLinkBurger.classList.remove('current');
} else {
  shoppingLinkBurger.classList.remove('current');
  homeLinkBurger.classList.add('current');
}

menuModalbtn.addEventListener('click', () => {
  menuModalbtn.classList.toggle('is-open');
  menuBurger.classList.toggle('is-open');
  backdropBurger.classList.toggle('is-open');
  bodyEl.classList.toggle('scroll-lock');

  if (localStorage.getItem('bookshelId')) {
    addPhotoContainer.classList.remove('isHidden');
    logInBtn.classList.add('isHidden');
    userInfo.classList.remove('isHidden');
    linkList.classList.remove('isHidden');
    logOutBtn.classList.remove('isHidden');
  } else {
    logInBtn.classList.remove('isHidden');
    userInfo.classList.add('isHidden');
    linkList.classList.add('isHidden');
    logOutBtn.classList.add('isHidden');
    addPhotoContainer.classList.add('isHidden');
  }
});

logOutBtn.addEventListener('click', onLogoutClick);
logInBtn.addEventListener('click', onLoginClick);

function onLogoutClick() {
  localStorage.removeItem('bookshelId');
  window.location.pathname = '/bookshelf/index.html';
}

function onLoginClick() {
  modalLogin.classList.remove('isHidden');
}

function onBurgerLinkClick(e) {
  e.preventDefault();
  if (e.target.closest('section-burger_item')) {
    return;
  }

  if (e.target.closest('.section-burger_item')) {
    if (homeLinkBurger.classList.contains('current')) {
      return;
    }

    window.location.pathname = '/bookshelf/index.html';
  } else {
    console.log('hello');
    if (shoppingLinkBurger.classList.contains('current')) {
      return;
    }
    window.location.pathname = '/bookshelf/shopping.html';
  }
}
