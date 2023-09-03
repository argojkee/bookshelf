const menuModalbtn = document.querySelector('.js-cross-switch');
const menuBurger = document.querySelector('.modal-burger');

menuModalbtn.addEventListener('click', () => {
  menuModalbtn.classList.toggle('is-open');
  menuBurger.classList.toggle('is-open');
});
