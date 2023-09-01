import { logUp, logIn } from './loginApi';

const form = document.getElementById('formUp');
const bUp = document.querySelector('.sUpBtb');
const bIn = document.querySelector('.sInBtb');

const nameLabel = document.getElementById('nameLabel');
const name = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

let logIs = true;

bUp.addEventListener('click', () => {
  nameLabel.hidden = false;
  logIs = true;
});
bIn.addEventListener('click', () => {
  nameLabel.hidden = true;
  logIs = false;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  sing();
  form.reset();
});

function sing() {
  if (logIs) {
    logUp(name.value, email.value, pass.value);
  } else {
    logIn(email.value, pass.value);
  }
}
