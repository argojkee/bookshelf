// function updateLabel() {
//   var myLabel = document.getElementById('myLabel');
//   myLabel.innerHTML = 'Новый текст';
//   var event = new Event('click');
//   myLabel.dispatchEvent(event);
// }

//  <button onclick="updateLabel()">Нажми меня</button>
//  <label id="myLabel" onclick="alert('Метка нажата')">Исходный текст</label>

const labelHeader = document.querySelector('.add-photo-label-header');
const addPhotoHeader = document.querySelector('.header-add-photo');
const labelBurger = document.querySelector('.add-photo-label');
const addPhotoBurger = document.querySelector('.photo-burger-btn');

addPhotoHeader.addEventListener('click', simulateClickOnHeaderLabel);
addPhotoBurger.addEventListener('click', simulateClickOnBurgerLabel);

function simulateClickOnHeaderLabel() {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  labelHeader.dispatchEvent(event);
}

function simulateClickOnBurgerLabel() {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  labelBurger.dispatchEvent(event);
}
