//get button element
const elementsSet = {
  case: document.querySelector('.buttonup-case'),
  upButton: document.querySelector('.buttonup'),
};

// event handler
let upButVieW = evt => {
  switch (evt.type) {
    // visibility/hidden scrolup button
    case 'scroll':
      if (Math.floor(window.scrollY) >= window.innerHeight / 2) {
        elementsSet.case.style.visibility = 'visible';
        elementsSet.upButton.classList.add('anima-up');
      } else {
        elementsSet.case.style.visibility = 'hidden';
        elementsSet.upButton.classList.remove('anima-up');
      }
      break;
    // visibility/hidden border
    case 'mouseover':
      elementsSet.case.style.outline = '2px solid grey';

      break;
    case 'mouseout':
      elementsSet.case.style.outline = 'none';

      break;
    // scroll up
    case 'click':
      window.scrollTo(0, 0);
      break;
    default:
      elementsSet.upButton.style.visibility = 'hidden';
      elementsSet.upButton.style.outline = 'none';
      break;
  }
};

document.addEventListener('scroll', upButVieW);
elementsSet.case.addEventListener('mouseover', upButVieW);
elementsSet.case.addEventListener('mouseout', upButVieW);
elementsSet.upButton.addEventListener('click', upButVieW);

window.addEventListener('resize', checkScroll);
checkScroll();
function checkScroll() {
  if (document.body.offsetWidth >= 1440) {
    elementsSet.case.style.left = `${document.body.offsetWidth / 2 + 620}px`;
    elementsSet.case.style.top = `80vh`;
  } else if (document.body.offsetWidth >= 768) {
    // elementsSet.case.style.left = `${document.body.offsetWidth - 80}px`;
    elementsSet.case.style.left = `${document.body.offsetWidth / 2 + 290}px`;
    elementsSet.case.style.top = `80vh`;
  } else if (
    document.body.offsetWidth > 375 &&
    document.body.offsetWidth < 768
  ) {
    elementsSet.case.style.left = `${
      document.body.offsetWidth / 2 + document.body.offsetWidth / 3
    }px`;
    elementsSet.case.style.top = `75vh`;
  } else if (document.body.offsetWidth <= 375) {
    elementsSet.case.style.left = `${document.body.offsetWidth / 2 + 80}px`;
    elementsSet.case.style.top = `70vh`;
  }
}
