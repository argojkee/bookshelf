
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
      document.querySelector('html').classList.add('dark');
      document.querySelector('.themetoggle').textContent = 'dark';
    }
    else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.themetoggle').textContent = 'Light';
    }
  } catch (err) { }
}

addDarkClassToHTML();