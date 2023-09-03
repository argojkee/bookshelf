const footerButton = document.querySelector('.footer-button');

const buttonEvent = () => {
    document.querySelector('.footer-cover').classList.add('hidden');
    footerButton.style.display = 'none';
}

footerButton.addEventListener('click', buttonEvent);
