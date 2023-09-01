const BookContainer = document.querySelector('.container-books');
BookContainer?.addEventListener('click', openModal);

const modalBook = document.querySelector('[data-modal="1"]');

const closeModalBtn = document.querySelector('.modal-btn-close');
closeModalBtn.addEventListener('click', closeModal);

function openModal(event) {
  event.preventDefault();
  //   console.log(event.target.closest('li'));
  if (!event.target.closest('li')) {
    return;
  } 
    modalBook.classList.toggle('hidden');
    modalBook.classList.toggle('active');
    addModalBookMarkup();
  
}

function closeModal(event) {
  modalBook.classList.toggle('hidden');
  modalBook.classList.toggle('active');
}

function addModalBookMarkup() {
  //   console.log('add');
}
