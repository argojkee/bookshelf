import { getName } from './loginApi.js';

// Dark theme for local storage
document.querySelector('.themetoggle').addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  switchToDarkTheme();
});

function switchToDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  } catch (err) {}
}

switchToDarkTheme();

// Burger button
const burgerSwitch = document.querySelector('.burger-head');
const burgerCross = document.querySelector('.burger-cross');

document.querySelector('.js-cross-switch').addEventListener('click', event => {
  event.preventDefault();

  burgerSwitch.classList.toggle('header-switch-hidden');
  burgerCross.classList.toggle('header-switch-hidden');
});

// Highlighting selected page in header with yellow color

const shoppListBtn = document.querySelector('.js-shop-btn');
const headHomeBtn = document.querySelector('.header-home');

if (document.location.href.includes('shopping')) {
  shoppListBtn.classList.add('header-selected-page');
  headHomeBtn.classList.remove('header-selected-page');
} else {
  shoppListBtn.classList.remove('header-selected-page');
  headHomeBtn.classList.add('header-selected-page');
}

// shoppListBtn.addEventListener('click', event => {

//   shoppListBtn.classList.add('header-selected-page');
//   headHomeBtn.classList.remove('header-selected-page');
// });

// headHomeBtn.addEventListener('click', event => {

//   shoppListBtn.classList.remove('header-selected-page');
//   headHomeBtn.classList.add('header-selected-page');
// });

// Hiding and showing Signing up BTN and logging out BTN

function headBtnAuthorization() {
  if (window.screen.availWidth < 768) {
    document.getElementById('head-logged-steven').style.display = 'none';
    document.getElementById('head-signup-btn').style.display = 'none';
  } else if (localStorage.getItem('bookshelId')) {
    document.getElementById('head-logged-steven').style.display = 'flex';
    document.getElementById('head-signup-btn').style.display = 'none';
  } else if (!localStorage.getItem('bookshelId')) {
    document.getElementById('head-logged-steven').style.display = 'none';
    document.getElementById('head-signup-btn').style.display = 'flex';

    // shoppListBtn.style.display = "none"
    // headHomeBtn.style.display = "none"
  }
}

headBtnAuthorization();

window.addEventListener('resize', headBtnAuthorization);
