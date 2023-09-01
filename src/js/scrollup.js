import '../css/scrollUP.css'

//get button element
const elementsSet = {
    upButton: document.querySelector('.button-up'),
};

let upButVieW = (evt) => {
 
    switch(evt.type) {
        case 'scroll':
            if(Math.floor(window.scrollY)> window.innerHeight / 2) { 
                elementsSet.upButton.style.visibility = "visible";
                elementsSet.upButton.classList.add("anima-up");
            }
            else {
                elementsSet.upButton.style.visibility = "hidden";
                elementsSet.upButton.classList.remove("anima-up");
            }
            break; 
        case 'mouseover':
            elementsSet.upButton.style.outline = "2px solid grey";
        
            break; 
        case 'mouseout':
            elementsSet.upButton.style.outline  = "none";
         
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
elementsSet.upButton.addEventListener('mouseover', upButVieW);
elementsSet.upButton.addEventListener('mouseout', upButVieW);
elementsSet.upButton.addEventListener('click', upButVieW);