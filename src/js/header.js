  // Dark theme for local storage
document.querySelector('.themetoggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  switchToDarkTheme()
});

function switchToDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
    }
    else {
      document.querySelector('body').classList.remove('dark');
    }
  } catch (err) { }
}

switchToDarkTheme();

  // Burger button
  const burgerSwitch = document.querySelector('.burger-head');
  const burgerCross = document.querySelector('.burger-cross');

  document.querySelector('.js-cross-switch').addEventListener('click', (event) => {
    event.preventDefault();
    
    burgerSwitch.classList.toggle("header-switch-hidden");
    burgerCross.classList.toggle("header-switch-hidden");
  });

  // Highlighting selected page in header with yellow color

    const shoppListBtn = document.querySelector(".js-shop-btn");
    const headHomeBtn = document.querySelector(".header-home");

    shoppListBtn.addEventListener('click', (event) => {
      event.preventDefault();

      shoppListBtn.classList.add("header-selected-page");
      headHomeBtn.classList.remove("header-selected-page");
    });

    // Button Switcher

    