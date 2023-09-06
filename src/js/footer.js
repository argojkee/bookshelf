const footerButton = document.querySelector('.footer-button');

const leftButton = document.querySelector('.footer-left');

const rightButton = document.querySelector('.footer-right');

const footerSectionElement = document.querySelector('.footer');

const footerCover = document.querySelector('.footer-cover');

const bodyScrollLock = require('body-scroll-lock');

const fifthElement = document.querySelector('[data-number = "5"]');

const pointerBatton = document.querySelector('.footer-pointer');

const informWindow = document.querySelector('.footer-inform');

const informName = document.querySelector('.footer-inform-name');

const informPosition = document.querySelector('.footer-inform-position');

const informSection = document.querySelector('.footer-inform-section');

const informGit = document.querySelector('.footer-inform-git');

const bodyElement = document.querySelector('body');

const developerElement = document.querySelector('.developer');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

let classArr = [
  'user0',
  'user1',
  'user2',
  'user3',
  'user4',
  'user5',
  'user6',
  'user7',
  'user8',
  'user9',
  'user10',
];
let elementSet = [];
let bufferArr = [];
let id = [];

const usersData = {
  _0: {
    name: 'CodeCrafters',
    position: 'Front-End',
    section: 'BookShelf',
    gitURL: '',
  },
  _1: {
    name: 'Yurii Yakovchuk',
    position: 'Front-End',
    section: 'Category list',
    gitURL: '',
  },
  _2: {
    name: 'Dmytro Shevchenko',
    position: 'Front-End',
    section: 'ModalWindow',
    gitURL: '',
  },
  _3: {
    name: 'Maksym Osovik',
    position: 'Front-End',
    section: 'Authorization',
    gitURL: '',
  },
  _4: {
    name: 'Oleksandr Kalinovskyi',
    position: 'Scrum Master',
    section: 'Funds',
    gitURL: '',
  },
  _5: {
    name: 'Maksym Haidabura',
    position: 'Team Lead',
    section: 'All project',
    gitURL: '',
  },
  _6: {
    name: 'Olena Peredrii',
    position: 'Front-End',
    section: 'Modal window',
    gitURL: '',
  },
  _7: {
    name: 'Yurii Vovk',
    position: 'Front-End',
    section: 'Mobile menu',
    gitURL: '',
  },
  _8: {
    name: 'Oleksii Melnichenko',
    position: 'Front-End',
    section: 'Header',
    gitURL: '',
  },
  _9: {
    name: 'Ruslana Matviienko',
    position: 'Front-End',
    section: 'Main content',
    gitURL: '',
  },
  _10: {
    name: 'Igor Lunyakin',
    position: 'Front-End',
    section: 'Shopping list',
    gitURL: '',
  },
};

const addMouseEvent = () => {
  const fifthElement = document.querySelector('[data-number = "5"]');
  fifthElement.removeEventListener('mouseover', active);
  fifthElement.removeEventListener('mouseout', lockActive);
  fifthElement.addEventListener('mouseover', active);
  fifthElement.addEventListener('mouseout', lockActive);
  fifthElement.style.borderColor = 'blue';
};

const userMainInform = data => {
  // Put Name
  informName.textContent = usersData[data].name;
  // Put section
  informSection.textContent = usersData[data].section;
  // Put gitURL
  informGit.textContent = usersData[data].gitURL;
  // Put position
  informPosition.textContent = usersData[data].position;
};

const createElementbyId = data => {
  // console.log(id);
  if (id.length !== 0) {
    id[0].dataset.number = 0;

    id.splice(0, 1);
  }

  for (let i = 0; i < data.length; i += 1) {
    let bindUserAndClass = document.querySelector(`#_${i}`);

    // console.log(bindUserAndClass);
    bindUserAndClass.classList.remove(`${elementSet[i]}`);
    bindUserAndClass.classList.add(`${data[i]}`);

    if (bindUserAndClass.classList.contains('user5')) {
      bindUserAndClass.dataset.number = 5;
      id.splice(0, 0, bindUserAndClass);

      let informRow = bindUserAndClass.getAttribute('id');
      // output main information about user
      userMainInform(informRow);
    }

    //clear previous class
    elementSet.splice(i, 1, data[i]);
  }
  addMouseEvent();
};

const left = () => {
  bufferArr[0] = classArr[0];
  // delete first element
  classArr.splice(0, 1);
  // add first element to array end
  classArr.splice(classArr.length, 0, bufferArr[0]);
  // console.log(classArr);

  createElementbyId(classArr);
};

const right = () => {
  bufferArr[1] = classArr[classArr.length - 1];
  classArr.splice(classArr.length - 1, 1);
  classArr.splice(0, 0, bufferArr[1]);
  // console.log(classArr);

  createElementbyId(classArr);
};

const wheelEvent = e => {
  if (e.deltaY > 60) {
    right();
  }

  if (e.deltaY < -60) {
    left();
  }
};

const active = () => {
  let scrollBody = window.innerWidth - document.body.offsetWidth + 'px';

  bodyElement.style.paddingRight = scrollBody;

  // developerElement.style.paddingRight = scrollBody;

  pointerBatton.classList.toggle('pointer-hidden');

  fifthElement.style.borderColor = 'blue';

  informWindow.style.visibility = 'visible';

  disableBodyScroll(fifthElement);
  addEventListener('wheel', wheelEvent);
};

const lockActive = () => {
  bodyElement.style.paddingRight = 0;

  pointerBatton.classList.toggle('pointer-hidden');
  informWindow.classList.toggle('inform-hidden');

  fifthElement.style.borderColor = 'grey';

  informWindow.style.visibility = 'hidden';

  enableBodyScroll(fifthElement);
  removeEventListener('wheel', wheelEvent);
};

const bodyEvent = e => {
  if (!e.composedPath().includes(footerSectionElement)) {
    footerCover.classList.remove('hidden');
    bodyElement.removeEventListener('click', bodyEvent);
    footerCover.style.zIndex = '8';
    footerButton.style.display = 'block';

    informWindow.style.visibility = 'hidden';
    leftButton.removeEventListener('click', leftEvent);
    rightButton.removeEventListener('click', rightEvent);
  }
};

const leftEvent = e => {
  left();
};

const rightEvent = e => {
  right();
};

const buttonEvent = () => {
  if (document.documentElement.scrollWidth <= 1439) {
    informWindow.style.visibility = 'visible';
    fifthElement.removeEventListener('mouseover', active);
    fifthElement.removeEventListener('mouseout', lockActive);
    fifthElement.style.borderColor = 'grey';
  }

  document.addEventListener('click', bodyEvent);

  leftButton.addEventListener('click', leftEvent);
  rightButton.addEventListener('click', rightEvent);

  footerCover.classList.add('hidden');
  footerCover.style.zIndex = '0';
  footerButton.style.display = 'none';

  if (document.documentElement.scrollWidth > 1439) {
    addMouseEvent();
  }
};

footerButton.addEventListener('click', buttonEvent);

createElementbyId(classArr);
