import '../css/scrollUP.css'

//get button element
const elementsSet = {
    case: document.querySelector('.buttonup-case'),
    upButton: document.querySelector('.buttonup'),
};

let upButVieW = (evt) => {
 
    switch(evt.type) {
        case 'scroll':
            if(Math.floor(window.scrollY) >= window.innerHeight / 2) { 
                elementsSet.case.style.visibility = "visible";
                elementsSet.upButton.classList.add("anima-up");
            }
            else {
                elementsSet.case.style.visibility = "hidden";
                elementsSet.upButton.classList.remove("anima-up");
            }
            break; 
        case 'mouseover':
            elementsSet.case.style.outline = "2px solid grey";
        
            break; 
        case 'mouseout':
            elementsSet.case.style.outline  = "none";
         
            break;
        case 'click':
            window.scrollTo(0,0);
            break; 
        default:
            elementsSet.upButton.style.visibility = "hidden";
            elementsSet.upButton.style.outline  = "none";
            break;
    }
};

document.addEventListener('scroll', upButVieW);
elementsSet.case.addEventListener('mouseover', upButVieW);
elementsSet.case.addEventListener('mouseout', upButVieW);
elementsSet.upButton.addEventListener('click', upButVieW);