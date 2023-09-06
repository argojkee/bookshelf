import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Notiflix from 'notiflix';
// import { headBtnAuthorization } from './header';
import { headBtnAuthorization } from './header';

Notiflix.Notify.init({
  width: '480px',
  position: 'right-bottom',
  distance: '10px',
  opacity: 1,
  fontSize: '20px',
  clickToClose: true,
  timeout: 3000,
  background: '#4f2ee8',
});
// import { checkAndSelectPhoto } from './addUserPhoto';

const userNameEl = document.querySelector('.head-username');
const checkLog = document.querySelector('.loginCheck');
const loginForm = document.getElementById('formUp');
const burgerMenu = document.querySelector('.modal-burger');
const userTextBurger = document.querySelector('.modal-user_title');
const menuModalbtn = document.querySelector('.js-cross-switch');
const burgerIcon = document.querySelector('.burger-head');
const closeBurgerIcon = document.querySelector('.burger-cross');
const backdropBurger = document.querySelector('.backdrop-burger');
const bodyEl = document.querySelector('body');

//Photo
const userPhotoHeaderSvg = document.querySelector('.js-user-icon-header');
const userPhotoBurgerSvg = document.querySelector('.js-user-icon-burger');
const buttonHeader = document.querySelector('.head-logged-btn');
const burgerUresInfo = document.querySelector('.modal-user');
const headerBtn = document.querySelector('.head-logged-btn');
const headerPhoto = document.querySelector('.header-user-photo');
const userImgBurger = document.querySelector('.user-image-burger');
const burgerBigPhoto = document.querySelector('.upload-photo');
const headerUploadBtn = document.querySelector('.header-add-photo');
const headerListBtns = document.querySelector('.header-list-btns');
// import { loadFile, getFile } from './loginApi';
//Photo end

const firebaseConfig = {
  apiKey: 'AIzaSyA7-4KyX1RYgBEpGnLc5cIem7b-B1uXswI',
  authDomain: 'bookshelf-9e344.firebaseapp.com',
  projectId: 'bookshelf-9e344',
  storageBucket: 'bookshelf-9e344.appspot.com',
  messagingSenderId: '533354887062',
  appId: '1:533354887062:web:73c5a8a44ecdf232e08fb7',
  measurementId: 'G-DDJY3C5G08',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const logUp = (name, emailValue, passValue) => {
  Notiflix.Notify.info('Сhecking the user...');
  createUserWithEmailAndPassword(auth, emailValue, passValue)
    .then(userCredential => {
      saveUser(userCredential);
      createUserInfo(name, userCredential);
    })
    .then(resp => {
      userNameEl.textContent =
        name.length > 6 ? `${name.slice(0, 5)}...` : name;
      headBtnAuthorization();

      buttonHeader.classList.remove('photo-is-loaded');
      burgerUresInfo.classList.remove('photo-is-loaded');
      headerPhoto.src = '#';
      burgerBigPhoto.src = require('../images/uploadphoto.webp');
      burgerMenu.classList.remove('is-open');
      userTextBurger.textContent = name.length > 14 ? name.slice(0, 12) : name;
      menuModalbtn.classList.toggle('is-open');
      burgerIcon.classList.remove('header-switch-hidden');
      closeBurgerIcon.classList.add('header-switch-hidden');
      backdropBurger.classList.remove('is-open');
      Notiflix.Notify.success('You are registered...');
      loginForm.reset();
    })
    .catch(error => errorAlert(error));
};

export const logIn = (emailValue, passValue) => {
  Notiflix.Notify.info('Сhecking the user...');
  signInWithEmailAndPassword(auth, emailValue, passValue)
    .then(userCredential => saveUser(userCredential))
    .then(resp => {
      checkAndSelectPhoto();
      getName(localStorage.getItem('bookshelId')).then(name => {
        userNameEl.textContent =
          name.length > 6 ? `${name.slice(0, 5)}...` : name;
        userTextBurger.textContent =
          name.length > 14 ? name.slice(0, 12) : name;
        headBtnAuthorization();
        burgerMenu.classList.remove('is-open');
        menuModalbtn.classList.toggle('is-open');
        burgerIcon.classList.remove('header-switch-hidden');
        closeBurgerIcon.classList.add('header-switch-hidden');
        backdropBurger.classList.remove('is-open');
        Notiflix.Notify.success('Access allowed...');
        loginForm.reset();
      });
    })
    .catch(error => errorAlert(error));
};

const avatarStatus = async status => {
  const uid = localStorage.getItem('bookshelId');
  const userBase = doc(db, uid, 'avaState');
  await setDoc(userBase, { avaState: status }, { merge: true });
};

const getAvatarStatus = async () => {
  const uid = localStorage.getItem('bookshelId');
  const state = await getDoc(doc(db, uid, 'avaState'));
  // console.log(state.data().avaState);
  return state.data().avaState;
};

const saveUser = userCredential => {
  const user = userCredential.user;
  localStorage.setItem('bookshelId', user.uid);
  document.querySelector('.loginBacdropLogIn').classList.add('isHidden');

  // document.body.style.overflowY = 'scroll';
  bodyEl.classList.remove('scroll-lock');
  // console.log(user);
};

const errorAlert = error => {
  Notiflix.Notify.failure(error.code);
  bodyEl.classList.add('scroll-lock');
};

const createUserInfo = async (nameValue, userCredential) => {
  try {
    await setDoc(doc(db, userCredential.user.uid, 'name'), {
      name: nameValue,
    });
    addBase([]);
    avatarStatus(false);
  } catch (e) {
    errorAlert(e);
  }
};

export const addBase = async array => {
  const uid = localStorage.getItem('bookshelId');
  const userBase = doc(db, uid, 'shopBase');
  try {
    await setDoc(userBase, { shopBase: [...array] }, { merge: true });
    return true;
  } catch (e) {
    return false;
  }
};

export const getBase = async () => {
  const uid = localStorage.getItem('bookshelId');
  const data = await getDoc(doc(db, uid, 'shopBase'));
  // console.log(data.data().shopBase);
  return data.data().shopBase;
};

export const getName = async () => {
  const uid = localStorage.getItem('bookshelId');
  const name = await getDoc(doc(db, uid, 'name'));
  // console.log(name.data().name);
  return name.data().name;
};

//UPDATE
const inputElement = document.getElementById('fileLoad');
inputElement.addEventListener('change', handleFiles, false);
function handleFiles() {
  loadFile(this.files[0]);
}

// ЗАКИДЫВАЕМ НА СЕРВЕР
const storage = getStorage(app);
export const loadFile = async file => {
  const storageRef = ref(storage, localStorage.getItem('bookshelId'));
  uploadBytes(storageRef, file).then(() => {
    // тут добавь код для перерисовки аватарки
    // что-то типа getFile().then(url => document.querySelector('.yourImgClass').src = url)
    checkAndSelectPhoto();
    avatarStatus(true);
    headerListBtns.classList.add('isHidden');
  });
};

// БЕРЕМ ИЗ СЕРВЕРА ССЫЛКУ НА КАРТИНКУ
export async function getFile() {
  const state = await getAvatarStatus();
  if (state) {
    return getDownloadURL(
      ref(storage, localStorage.getItem('bookshelId'))
    ).then(url => {
      return url;
    });
  } else {
    buttonHeader.classList.remove('photo-is-loaded');
    burgerUresInfo.classList.remove('photo-is-loaded');
    headerPhoto.src = '#';
    userImgBurger.src = '';
  }
}

userPhotoHeaderSvg.innerHTML = `<use xlink:href="#icon-userphoto"></use>`;
userPhotoBurgerSvg.innerHTML = `<use xlink:href="#icon-userphoto"></use>`;

if (localStorage.getItem('bookshelId')) {
  checkAndSelectPhoto();
}

export function checkAndSelectPhoto() {
  getFile()
    .then(url => {
      if (url) {
        buttonHeader.classList.add('photo-is-loaded');
        burgerUresInfo.classList.add('photo-is-loaded');
        headerPhoto.src = url;
        userImgBurger.src = url;
        burgerBigPhoto.src = url;
      } else {
        buttonHeader.classList.remove('photo-is-loaded');
        burgerUresInfo.classList.remove('photo-is-loaded');
        headerPhoto.src = '#';
        burgerBigPhoto.src = require('../images/uploadphoto.webp');
      }
    })
    .catch(err => console.log(err));
}

//UPLOAD ON HEADER BUTTON

const inputElementHeader = document.getElementById('fileLoadHeader');
inputElementHeader.addEventListener('change', handleFiles, false);
