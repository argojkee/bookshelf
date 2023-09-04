const footerButton = document.querySelector('.footer-button');

const footerCover = document.querySelector('.footer-cover');

const bodyScrollLock = require('body-scroll-lock');

const fifthElement = document.querySelector('[data-number = "5"]');

const pointerBatton = document.querySelector('.footer-pointer');

const informWindow = document.querySelector('.footer-inform');

const informName = document.querySelector('.footer-inform-name');

const informSection = document.querySelector('.footer-inform-section');

const informGit = document.querySelector('.footer-inform-git');

const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

let classArr = ['user0', 'user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'];
let elementSet = [];
let bufferArr = [];
let id = [];

const usersData = {
    0: {name: "",
    section: "",
    gitURL: "",},
    1: {name: "",
    section: "",
    gitURL: "",},
    2: {name: "",
    section: "",
    gitURL: "",},
    3: {name: "",
    section: "",
    gitURL: "",},
    4: {name: "",
    section: "",
    gitURL: "",},
    5: {name: "Dmitry Shevchenko",
    section: "ModalWindow, Footer, ScrolUp Button",
    gitURL: "../gihub.com",},
    6: {name: "",
    section: "",
    gitURL: "",},
    7: {name: "",
    section: "",
    gitURL: "",},
    8: {name: "",
    section: "",
    gitURL: "",},
    9: {name: "",
    section: "",
    gitURL: "",},
    10: {name: "",
    section: "",
    gitURL: "",},
}

const addMouseEvent = () => {

    const fifthElement = document.querySelector('[data-number = "5"]');
    fifthElement.removeEventListener("mouseover", active);
    fifthElement.removeEventListener("mouseout", lockActive);
    fifthElement.addEventListener("mouseover", active);
    fifthElement.addEventListener("mouseout", lockActive);
    fifthElement.style.borderColor = "blue";
}

const userMainInform = (data) => {
    
}

const createElementbyId = (data) => {
    console.log(id);
    if(id.length !== 0) {

        id[0].dataset.number = 0;

        id.splice(0,1);
    }

    for(let i=0; i < data.length; i += 1) {

        let bindUserAndClass = document.querySelector(`#_${i}`);

        // console.log(bindUserAndClass);
        bindUserAndClass.classList.remove(`${elementSet[i]}`);
        bindUserAndClass.classList.add(`${data[i]}`);

        if(bindUserAndClass.classList.contains("user5")) {
            
            bindUserAndClass.dataset.number = 5;
            id.splice(0, 0, bindUserAndClass);
            // output main information about user
            userMainInform(id);
        }

        //clear previous class
        elementSet.splice(i, 1, data[i]);
    }
    addMouseEvent();
};

const left = () => {
    bufferArr[0] = classArr[0];
    // delete first element
    classArr.splice(0,1);
    // add first element to array end
    classArr.splice(classArr.length,0, bufferArr[0]);
    console.log(classArr);
   
    createElementbyId(classArr);
};

const right = () => {
    bufferArr[1] = classArr[classArr.length - 1];
    classArr.splice(classArr.length - 1, 1);
    classArr.splice(0,0, bufferArr[1]);
    // console.log(classArr);
   
    createElementbyId(classArr);
};

const wheelEvent = (e) => {

    if(e.deltaY > 50) {
        right();
    }

    if(e.deltaY < -50) {
        left();
    }
};

const active = () => {
    
    pointerBatton.classList.toggle('pointer-hidden');
   
    fifthElement.style.borderColor = "blue";
    disableBodyScroll(fifthElement);
    addEventListener("wheel", wheelEvent);

};

const lockActive = () => {
    
    pointerBatton.classList.toggle('pointer-hidden');
    informWindow.classList.toggle('inform-hidden');

    fifthElement.style.borderColor = "grey";
    enableBodyScroll(fifthElement);
    removeEventListener("wheel", wheelEvent);

};


const buttonEvent = () => {

    footerCover.classList.add('hidden');
    footerCover.style.zIndex = "0";
    footerButton.style.display = 'none';
    informWindow.classList.visimility = "visible";
    addMouseEvent();
}

footerButton.addEventListener('click', buttonEvent);

createElementbyId(classArr);
