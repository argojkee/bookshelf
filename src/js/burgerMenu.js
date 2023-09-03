const menuBurger = document.querySelector('.js-cross-switch');
menuBurger.addEventListener('click', onMenuOpen);

function onMenuOpen(event) {
  event.preventDafault();
  if (event.target.include()) {
    return;
  }
}
