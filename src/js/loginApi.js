import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDocs, setDoc, doc, collection, getDoc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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
  createUserWithEmailAndPassword(auth, emailValue, passValue)
    .then(userCredential => {
      saveUser(userCredential);
      createUserInfo(name, userCredential);
    })
    .catch(error => errorAlert(error));
};

export const logIn = (emailValue, passValue) => {
  signInWithEmailAndPassword(auth, emailValue, passValue)
    .then(userCredential => saveUser(userCredential))
    .catch(error => errorAlert(error));
};

const saveUser = userCredential => {
  const user = userCredential.user;
  localStorage.setItem('bookshelId', user.uid);
  console.log(user);
};

const errorAlert = error => {
  window.alert(error);
};

const createUserInfo = async (nameValue, userCredential) => {
  try {
    // await setDoc(doc(db, userCredential.user.uid, 'name'), {
    //   name,
    // });
    await setDoc(doc(db, userCredential.user.uid, 'name'), {
      name: nameValue,
    });
    addBase([
      { test: 'test', some: 'some' },
      { test: 'test2', some: 'some2' },
    ]);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const addBase = array => {
  const uid = localStorage.getItem('bookshelId');
  const userBase = doc(db, uid, 'shopBase');
  setDoc(userBase, { shopBase: [...array] }, { merge: true });
};

export const getBase = async () => {
  const uid = localStorage.getItem('bookshelId');
  const data = await getDoc(doc(db, uid, 'shopBase'));
  console.log(data.data());
  return data.data();
};

export const getName = async () => {
  const uid = localStorage.getItem('bookshelId');
  const name = await getDoc(doc(db, uid, 'name'));
  console.log(name.data());
  return name.data();
};
