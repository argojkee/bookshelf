!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register("jaTwk",(function(e,t){e.exports=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("lPaFu")})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.3d9070ac.js","lPaFu":"Books.34b8761e.png","1Vwc0":"shopping.9b18d8ce.js"}')),i("aVhnN"),i("i8Q71");var c=i("bBhLo"),a=(i("bBhLo"),i("6JpON"));c=i("bBhLo");function r(){return document.documentElement.clientWidth<768?1:document.documentElement.clientWidth>767&&document.documentElement.clientWidth<1440?3:document.documentElement.clientWidth>1439?5:void 0}var s=r(),l=document.querySelector(".all-categories-container"),d=(document.querySelector("content_loadBooks"),document.querySelector(".container-books")),u=document.querySelector(".content");function m(){l.classList.add("lock-click-categories"),d.innerHTML="",u.classList.add("content-loader"),(0,c.fetchToAllBooks)().then((function(e){return e.data})).then((function(e){u.classList.remove("content-loader"),d.innerHTML=' <h1 class="title-container-topBooks"><span class="title_theme">Best sellers</span> <span class="title_blue"> books </span></h1>\n  <ul class="content_list_categories">'.concat(e.map((function(e){return'<li class="content_categoryItem '.concat(e.list_name,'">\n      <span class="content_category">').concat(e.list_name,'</span>\n                <ul class="content_list_topBooks">').concat(e.books.map((function(e,t){if(t<r())return'<li class="content_book">\n                          <a data-id='.concat(e._id,' href="').concat(e.book_image,'"  class="content-book-link" >\n                        \n                          <img class="content__image" src="').concat(e.book_image,'" alt="').concat(e.title,'" loading="lazy" />\n                         \n                         <span class="content_textname" id="content_book_name">').concat(e.title,'</span>\n                         <span class="content_textauthor" id="content_book_name">').concat(e.author,"</span>\n                           </a>\n                          </li>")})).join(""),'</ul>\n          \n               \n                <button class="content_btnSeeMore"\n                        type="button"\n                        name="').concat(e.list_name,'" \n                        action="submit">SEE MORE                        \n                </button>   \n                                                           \n          </li>')})).join(""),"</ul>"),l.classList.remove("lock-click-categories")}))}function g(t){(0,c.fetchBooksByCategory)(t.name).then((function(e){return t.classList.remove("loader"),e.data})).then((function(n){!function(t,n){var o=(i=t,c=n,c.map((function(t,n){if(n>=s)return n+1===c.length&&(function(e){e.classList.add("hidden")}(i),null!=i.parentNode.nextSibling&&i.parentNode.nextSibling.firstElementChild.classList.add("contend_categoryMove"),e(a).Notify.info("this is all. Check out other category books")),'<li class="content_book">\n                          <a data-id='.concat(t._id,' href="').concat(t.book_image,'" class="content-book-link" >\n                          <img class="content__image" src="').concat(t.book_image,'" alt="').concat(t.title,'" loading="lazy" />\n                          \n                          <span class="content_textname" id="content_book_name">').concat(t.title,'</span>\n                          <span class="content_textauthor" id="content_book_author">').concat(t.author,"</span>\n                          </a>\n                </li>")})).join(""));var i,c;t.previousElementSibling.insertAdjacentHTML("beforeend",o)}(t,n),t.innerHTML="SEE MORE"})).catch()}d.innerHTML='<div class="content-error"> \n              <img \n              src="'.concat(i("jaTwk"),'"\n              alt="error"\n              class="content_imgError"/>\n         </div>'),m(),document.querySelector(".container-books").addEventListener("click",(function(e){if(e.preventDefault(),"button"!==e.target.type)return;g(e.target)})),e(a).Notify.init({width:"480px",position:"right-bottom",distance:"10px",opacity:1,fontSize:"20px",clickToClose:!0,timeout:3e3,background:"#4f2ee8"});var f,p={container:document.querySelector(".all-categories-box"),title:document.querySelector(".all-categoris-title"),element:document.querySelector(".all-categoris-element"),booksContainer:document.querySelector(".container-books"),categoriesList:document.querySelector(".all-categories-container")},b=document.querySelector(".container-books");(0,c.fetchCategoriesList)().then((function(e){var t=e.data,n=t.map((function(e){return'<li class="all-categoris-list">\n      <a class="all-categoris-element" href="" data-name="'.concat(e.list_name,'"\n        >').concat(e.list_name,"</a\n      >\n    </li>\n      ")})).join("");p.container.insertAdjacentHTML("beforeend","".concat(n))})).catch((function(e){console.error("Error:",e)})),p.title.classList.add("current"),p.container.addEventListener("click",(function(){event.preventDefault();var e=event.target;if(!e.classList.contains("all-categoris-element")&&!e.classList.contains("all-categoris-title"))return;var t=e.dataset.name;n=e,document.querySelectorAll(".all-categoris-list a").forEach((function(e){e.classList.contains("current")&&(f=e)})),void(n!==f&&(n.classList.add("current"),f.classList.remove("current"))),"All categories"===t?m():(p.booksContainer.innerHTML="",p.categoriesList.classList.add("lock-click-categories"),p.booksContainer.classList.add("content-loader"),o=t,(0,c.fetchBooksByCategory)(o).then((function(e){var t,n,i,c,a,r,s;console.log("Received data from server:",e.data),p.booksContainer.classList.remove("content-loader"),t=e.data,n=o.split(" "),i=n.slice(0,-1).join(" "),c=n[n.length-1],a='<h1 class="title-container-topBooks">\n    <span class="title_theme">'.concat(i,'</span>\n    <span class="title_blue">').concat(c,"</span></h1>"),r=t.map((function(e,t){return'<li class="content_book" data-id='.concat(e._id,">\n            <a data-id=").concat(e._id,' href="').concat(e.book_image,'" >\n         <img class="content__image" src="').concat(e.book_image,'" alt="').concat(e.title,'" loading="lazy" />\n         \n           <span class="content_textname" id="content_book_name">').concat(e.title,'</span>\n           <span class="content_textauthor" id="content_book_name">').concat(e.author,"</span>\n            </a>\n          </li>")})).join(""),s="".concat(a,'<ul class="content_list_topBooks">').concat(r,"</ul>"),b.insertAdjacentHTML("beforeend",s),p.categoriesList.classList.remove("lock-click-categories")})).catch((function(e){console.error("Error:",e)})));var n;var o})),i("kX0OW"),i("1Cek3"),i("9cmFR"),i("gM4a7");var v=document.querySelector(".add-photo-label-header"),h=document.querySelector(".header-add-photo"),y=document.querySelector(".add-photo-label"),k=document.querySelector(".photo-burger-btn");h.addEventListener("click",(function(){var e=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});v.dispatchEvent(e)})),k.addEventListener("click",(function(){var e=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});y.dispatchEvent(e)})),i("iIkkM"),i("7ZZgP");var _=document.querySelector(".footer-button"),L=document.querySelector(".footer-left"),E=document.querySelector(".footer-right"),S=document.querySelector(".footer"),q=document.querySelector(".footer-cover"),M=i("gnsaF"),x=document.querySelector('[data-number = "5"]'),w=document.querySelector(".footer-pointer"),R=document.querySelector(".footer-inform"),C=document.querySelector(".footer-inform-name"),B=document.querySelector(".footer-inform-position"),F=document.querySelector(".footer-inform-section"),H=document.querySelector(".footer-inform-git"),T=document.querySelector("body"),U=(document.querySelector(".developer"),M.disableBodyScroll),j=M.enableBodyScroll,O=["user0","user1","user2","user3","user4","user5","user6","user7","user8","user9","user10"],A=[],N=[],W=[],z={_0:{name:"",position:"Front-End",section:"",gitURL:""},_1:{name:"Yurii Yakovchyk",position:"Front-End",section:"Category list",gitURL:""},_2:{name:"Dmytro Shevchenko",position:"Front-End",section:"ModalWindow",gitURL:""},_3:{name:"Maksym Osovik",position:"Front-End",section:"Authorization",gitURL:""},_4:{name:"Oleksandr Kalinovskyi",position:"Scrum Master",section:"Funds",gitURL:""},_5:{name:"Maksym Haydabura",position:"Team Lead",section:"All project",gitURL:""},_6:{name:"Olena Peredrii",position:"Front-End",section:"Modal window",gitURL:""},_7:{name:"Yurii Vovk",position:"Front-End",section:"Mobile menu",gitURL:""},_8:{name:"Oleksii Melnichenko",position:"Front-End",section:"Header",gitURL:""},_9:{name:"Ruslana Matviienko",position:"Front-End",section:"Main content",gitURL:""},_10:{name:"Igor Lunyakin",position:"Front-End",section:"Shopping list",gitURL:""}},D=function(){var e=document.querySelector('[data-number = "5"]');e.removeEventListener("mouseover",Z),e.removeEventListener("mouseout",K),e.addEventListener("mouseover",Z),e.addEventListener("mouseout",K),e.style.borderColor="blue"},I=function(e){C.textContent=z[e].name,F.textContent=z[e].section,H.textContent=z[e].gitURL,B.textContent=z[e].position},P=function(e){0!==W.length&&(W[0].dataset.number=0,W.splice(0,1));for(var t=0;t<e.length;t+=1){var n=document.querySelector("#_".concat(t));if(n.classList.remove("".concat(A[t])),n.classList.add("".concat(e[t])),n.classList.contains("user5")){n.dataset.number=5,W.splice(0,0,n);var o=n.getAttribute("id");I(o)}A.splice(t,1,e[t])}D()},V=function(){N[0]=O[0],O.splice(0,1),O.splice(O.length,0,N[0]),console.log(O),P(O)},Y=function(){N[1]=O[O.length-1],O.splice(O.length-1,1),O.splice(0,0,N[1]),P(O)},J=function(e){e.deltaY>60&&Y(),e.deltaY<-60&&V()},Z=function(){var e=window.innerWidth-document.body.offsetWidth+"px";T.style.paddingRight=e,w.classList.toggle("pointer-hidden"),x.style.borderColor="blue",R.style.visibility="visible",U(x),addEventListener("wheel",J)},K=function(){T.style.paddingRight=0,w.classList.toggle("pointer-hidden"),R.classList.toggle("inform-hidden"),x.style.borderColor="grey",R.style.visibility="hidden",j(x),removeEventListener("wheel",J)},Q=function(e){e.composedPath().includes(S)||(q.classList.remove("hidden"),T.removeEventListener("click",Q),q.style.zIndex="8",_.style.display="block",R.style.visibility="hidden",L.removeEventListener("click",X),E.removeEventListener("click",G))},X=function(e){V()},G=function(e){Y()};_.addEventListener("click",(function(){document.documentElement.scrollWidth<=1439&&(R.style.visibility="visible",x.removeEventListener("mouseover",Z)),document.addEventListener("click",Q),L.addEventListener("click",X),E.addEventListener("click",G),q.classList.add("hidden"),q.style.zIndex="0",_.style.display="none",D()})),P(O)}();
//# sourceMappingURL=index.3d9070ac.js.map
