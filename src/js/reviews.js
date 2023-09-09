// ----- REVIEWS MODULE -----

import Notiflix from 'notiflix';

// main elements of 'review' module 
const elementArr = {
    formElement: document.querySelector(".review-form"),
    reviewButtonLink: document.querySelector(".review-send-button"),
    reviewInputLink: document.querySelector(".review-input"),
    reviewAreaLink: document.querySelector(".review-textarea"),
    reviewText: document.querySelector(".review-text"),
    users: {},
}

// colors text of reviews textarea
function colorText(){
  const spanelement = document.querySelectorAll('span');
  Array.from(spanelement).map(element => element.style.color = 'blue');
}

// new 'review-text' child
function newChild() {

  let newTextElement = document.createElement("p");
    
  elementArr.reviewText.appendChild(newTextElement);

  newTextElement.style.color = "black";
  newTextElement.style.backgroundColor = "lightblue";
  newTextElement.style.opacity = "0.7";
  newTextElement.style.borderRadius = "6px";
  newTextElement.style.margin = "10px";
 
  newTextElement.style.padding = "10px";

  return newTextElement;
}

// get curent data and time
function getCurrentDate() {

  let currentdate = new Date();

  const dateHours = currentdate.getHours().toString().length === 1 ? "0" + currentdate.getHours().toString() : currentdate.getHours().toString();
  const dateMinutes = currentdate.getMinutes().toString().length === 1 ? "0" + currentdate.getMinutes().toString() : currentdate.getMinutes().toString();
  const dateSeconds = currentdate.getSeconds();

  // get date
  const dateDay = currentdate.getDate().toString().length === 1 ? "0" + currentdate.getDate().toString() : currentdate.getDate().toString();
  const dateMonth = currentdate.getMonth().toString().length === 1 ? "0" + (currentdate.getMonth() + 1).toString() : (currentdate.getMonth() + 1).toString();
  
  const timedata = dateHours + ":" + dateMinutes;
  const datedata = dateDay + "/" + dateMonth;
  const yeardata = currentdate.getFullYear();

  let newDateObj = [timedata, datedata, yeardata, dateSeconds];

  return newDateObj;

}

// save review to local storage
function saveToLocalStorage(userCommentDate, key){
   
    // key for access to object, that contained comments
    const LOCAL_STORAG = "bookshelf";
    // get value input fields
    const { elements: {user, comment} } = elementArr.formElement;

    elementArr.users[key] = {user: userCommentDate +  user.value, comment: comment.value};
    // write to data local storage
    localStorage.setItem(LOCAL_STORAG, JSON.stringify(elementArr.users));

}

// fill 'review-text' field 
function getLocalStorageValue() {

  if(localStorage.getItem("bookshelf") !== null && localStorage.getItem("bookshelf").length !== 0) {
  
    let storageObj = JSON.parse(localStorage.getItem("bookshelf"));  

    // when you reload page, data in 'localStorage' don't delete, but 'elementArr.users' object to will be clear.
    // which will lead to loss of old data
    // so that this doesn't happen (don't lose data), necessary write old data 
    // after load from 'localStorage' to already empty 'elementArr.users'
    elementArr.users = storageObj;
    
    // create new child (new message in 'review text')
    for(key in storageObj) {
        let areaChild = newChild();
        // add to him class, which is equal to data in 'elementArr.users.user'  
        areaChild.classList.add(storageObj[key][Object.keys(storageObj[key])[0]]);
       
        // print "elementArr.users.user": "elementArr.users.comment" inside review text field
        areaChild.innerHTML = `${storageObj[key][Object.keys(storageObj[key])[0]].split("").concat([":", "<" ,"b" , "r", ">"]).join("")} ${storageObj[key][Object.keys(storageObj[key])[1]]}`;
    }
    colorText();
  }

}

// search user
// let existsUser = () => localStorage.getItem('bookshelId');

// Press button event
  function reviewButtonIterr(e){
    // close default browser's actions
    e.preventDefault();
    // search user
    // let getUserID = existsUser();

    // if (!getUserID) {

    //   Notiflix.Notify.info(
    //     "Please register to be able to leave a review!",
    //     { width: '360px' }
    //   );
    //   return;
    // }

    // check that the object "bookshelf" exists and not empty
    if(elementArr.reviewInputLink.value.length !== 0 && elementArr.reviewAreaLink.value.length !== 0) {
      // get current data and time
      let commentTime = getCurrentDate();

      commentTime[3] = commentTime[3].toString().length === 1 ? "0" + commentTime[3].toString() : commentTime[3].toString();

      saveToLocalStorage(`<span>${commentTime[1]}/${commentTime[2]}_${commentTime[0]}:${commentTime[3]}</span>_`, elementArr.reviewInputLink.value);

      // add new murkup
      let currentNewChild = newChild();
      currentNewChild.classList.add(elementArr.reviewInputLink.value);

      // add main text to 'textarea'
      currentNewChild.insertAdjacentHTML('beforeend',
       `<span>${commentTime[1]}/${commentTime[2]}_${commentTime[0]}:${commentTime[3]}</span>_${elementArr.reviewInputLink.value.split("").concat([":", "<" ,"b" , "r", ">"]).join("")} ${elementArr.reviewAreaLink.value}`);

      colorText();
      
      // clear input fields
      elementArr.reviewInputLink.value = "";
      elementArr.reviewAreaLink.value = "";
      return;
    }

    Notiflix.Notify.info(
      "I'm sorry. All fields must be filled!",
      { width: '360px' }
    );

  }

  // firs start
  getLocalStorageValue();

  elementArr.reviewButtonLink.addEventListener("click", reviewButtonIterr);