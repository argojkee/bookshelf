const BookContainer = document.querySelector('.container-books');
BookContainer.addEventListener('click', openModal);

const modalBook = document.querySelector('[data-modal="1"]');

const closeModalBtn = document.querySelector('.modal-btn-close');
closeModalBtn.addEventListener('click', closeModal);

function openModal(event) {
  if (event.target.parentNode.nodeName !== 'LI') {
    return;
  } else {
    modalBook.classList.toggle('hidden');
    modalBook.classList.toggle('active');
    addModalBookMurkup();
  }
}

function closeModal(event) {
  modalBook.classList.toggle('hidden');
  modalBook.classList.toggle('active');
}

function addModalBookMurkup() {
  //   console.log('add');
}
