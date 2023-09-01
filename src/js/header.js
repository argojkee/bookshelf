
document.querySelector('.themetoggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML()
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      // document.querySelector('.themetoggle').textContent = 'dark';
    }
    else {
      document.querySelector('body').classList.remove('dark');
      // document.querySelector('.themetoggle').textContent = 'Light';
    }
  } catch (err) { }
}

addDarkClassToHTML();

  const burgerSwitch = document.querySelector('.burger-head');
  const burgerCross = document.querySelector('.burger-cross');

  document.querySelector('.js-cross-switch').addEventListener('click', (event) => {
    event.preventDefault();
    
    burgerSwitch.classList.toggle("header-switch-hidden");
    burgerCross.classList.toggle("header-switch-hidden");
  });
