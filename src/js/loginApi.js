import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { headBtnAuthorization } from './header';
import { headBtnAuthorization } from './header';

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
  checkLog.textContent = 'Сhecking the user...';

  createUserWithEmailAndPassword(auth, emailValue, passValue)
    .then(userCredential => {
      saveUser(userCredential);
      createUserInfo(name, userCredential);
    })
    .then(resp => {
      userNameEl.textContent =
        name.length > 6 ? `${name.slice(0, 6)}...` : name;
      headBtnAuthorization();

      burgerMenu.classList.remove('is-open');
      userTextBurger.textContent = name;
      menuModalbtn.classList.toggle('is-open');
      burgerIcon.classList.remove('header-switch-hidden');
      closeBurgerIcon.classList.add('header-switch-hidden');
      backdropBurger.classList.remove('is-open');
    })
    .catch(error => errorAlert(error));
};

export const getName = async () => {
  const uid = localStorage.getItem('bookshelId');
  const name = await getDoc(doc(db, uid, 'name'));
  // console.log(name.data().name);
  return name.data().name;
};

export const logIn = (emailValue, passValue) => {
  checkLog.textContent = 'Сhecking the user...';
  signInWithEmailAndPassword(auth, emailValue, passValue)
    .then(userCredential => saveUser(userCredential))
    .then(resp => {
      getName(localStorage.getItem('bookshelId')).then(name => {
        userNameEl.textContent =
          name.length > 6 ? `${name.slice(0, 6)}...` : name;
        userTextBurger.textContent = name;
        headBtnAuthorization();
        burgerMenu.classList.remove('is-open');
        menuModalbtn.classList.toggle('is-open');
        burgerIcon.classList.remove('header-switch-hidden');
        closeBurgerIcon.classList.add('header-switch-hidden');
        backdropBurger.classList.remove('is-open');
      });
    })
    .catch(error => errorAlert(error));
};

const saveUser = userCredential => {
  const user = userCredential.user;
  localStorage.setItem('bookshelId', user.uid);
  document.querySelector('.loginBacdropLogIn').classList.add('isHidden');
  // loginForm.disable = false;
  checkLog.textContent = '';

  // document.body.style.overflowY = 'scroll';
  bodyEl.classList.remove('scroll-lock');
  // console.log(user);
};

const errorAlert = error => {
  window.alert(error);
  checkLog.textContent = '';
  bodyEl.classList.add('scroll-lock');
};

const createUserInfo = async (nameValue, userCredential) => {
  try {
    await setDoc(doc(db, userCredential.user.uid, 'name'), {
      name: nameValue,
    });
    addBase([]);
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

// ============== LOAD IMG FUNCTION =================================================
// ==================================================================================

// БЕРЕМ КАРТИНКУ С КОМПА
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
  });
};

// БЕРЕМ ИЗ СЕРВЕРА ССЫЛКУ НА КАРТИНКУ
export const getFile = async () => {
  getDownloadURL(ref(storage, localStorage.getItem('bookshelId')))
    .then(url => {
      return url;
    })
    .catch(error => {});
};
// ===============================================================================
// ===============================================================================

