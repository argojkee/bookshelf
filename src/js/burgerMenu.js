const menuModalbtn = document.querySelector('.js-cross-switch');
const menuBurger = document.querySelector('.modal-burger');
const logOutBtn = document.querySelector('.section-burger_logOut');
const logInBtn = document.querySelector('.section-burger_SingUp');
const modalLogin = document.querySelector('.loginBacdropLogIn');

menuModalbtn.addEventListener('click', () => {
  menuModalbtn.classList.toggle('is-open');
  menuBurger.classList.toggle('is-open');

  if (localStorage.getItem('bookshelId')) {
    logInBtn.classList.add('isHidden');
  } else {
    logInBtn.classList.remove('isHidden');
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
