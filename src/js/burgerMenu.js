const menuModalbtn = document.querySelector('.js-cross-switch');
const menuBurger = document.querySelector('.modal-burger');
const logOutBtn = document.querySelector('.section-burger_logOut');
const logInBtn = document.querySelector('.section-burger_SingUp');
const modalLogin = document.querySelector('.loginBacdropLogIn');
const userInfo = document.querySelector('.modal-user');
const linkList = document.querySelector('.section-burger_list');

menuModalbtn.addEventListener('click', () => {
  menuModalbtn.classList.toggle('is-open');
  menuBurger.classList.toggle('is-open');

  if (localStorage.getItem('bookshelId')) {
    logInBtn.classList.add('isHidden');
    userInfo.classList.remove('isHidden');
    linkList.classList.remove('isHidden');
    logOutBtn.classList.remove('isHidden');
  } else {
    logInBtn.classList.remove('isHidden');
    userInfo.classList.add('isHidden');
    linkList.classList.add('isHidden');
    logOutBtn.classList.add('isHidden');
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
