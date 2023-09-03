const burgerOpenMenu = document.querySelector('.js-cross-switch');
const openBackdrop = document.querySelector('.backdrop-burger');

burgerOpenMenu.addEventListener('click', onOpenMenu);

function onOpenMenu(event) {
  burgerOpenMenu.classList.add('is-active');
  if (burgerOpenMenu.include('is-active')) {
    openBackdrop.style.display = 'block';
    console.log(openBackdrop.style.display);
  } else {
    burgerOpenMenu.classList.remove('is-active');
    openBackdrop.style.display = 'none';
  }
}
