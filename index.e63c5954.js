!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,n){o[t]=n},n.parcelRequired7c6=a),a.register("jaTwk",(function(t,n){t.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("lPaFu")})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.e63c5954.js","lPaFu":"Books.34b8761e.png","1Vwc0":"shopping.ad27e90c.js"}')),a("aVhnN"),a("i8Q71");var c=a("bBhLo"),i=(a("bBhLo"),a("6JpON"));c=a("bBhLo");function s(){return document.documentElement.clientWidth<768?1:document.documentElement.clientWidth>767&&document.documentElement.clientWidth<1140?3:document.documentElement.clientWidth>1139?5:void 0}var l=s(),r="",u=document.querySelector(".container-books"),d=document.querySelector(".content");document.querySelector(".content_category");function m(){u.innerHTML="",u.innerHTML="",(0,c.fetchToAllBooks)().then((function(t){return t.data})).then((function(t){d.classList.remove("content-loader"),u.innerHTML=' <h1 class="title-container-topBooks"><span class="title_theme">Best sellers</span> <span class="title_blue"> books </span></h1>\n  <ul class="content_list_categories">'.concat(t.map((function(t){return'<li class="content_categoryItem '.concat(t.list_name,'">\n      <span class="content_category">').concat(t.list_name,'</span>\n                <ul class="content_list_topBooks">').concat(t.books.map((function(t,n){if(n<s())return'<li class="content_book">\n                          <a data-id='.concat(t._id,' href="').concat(t.book_image,'"  class="content-book-link" >\n                        \n                          <img class="content__image" src="').concat(t.book_image,'" alt="').concat(t.title,'" loading="lazy" />\n                         \n                         <span class="content_textname" id="content_book_name">').concat(t.title,'</span>\n                         <span class="content_textauthor" id="content_book_name">').concat(t.author,"</span>\n                           </a>\n                          </li>")})).join(""),'</ul>\n          \n                <button class="content_btnSeeMore" type="button" name="').concat(t.list_name,'" \n                 action="submit">SEE MORE</button>         \n          </li>')})).join(""),"</ul>")}))}function f(n,e){(0,c.fetchBooksByCategory)(e).then((function(t){return n.classList.remove("loader"),t.data})).then((function(e){!function(n,e){var o=function(n,e){var o=0,a=0,c=e.map((function(c,s){if(s>=l&&o<5)return o+=1,a+=1,s+1===e.length&&(!function(t){t.classList.add("hidden")}(n),null!=n.parentNode.nextSibling&&n.parentNode.nextSibling.firstElementChild.classList.add("contend_categoryMove"),t(i).Notify.info("this is all. Check out other category books")),'<li class="content_book">\n                          <a data-id='.concat(c._id,' href="').concat(c.book_image,'" class="content-book-link" >\n                          <img class="content__image" src="').concat(c.book_image,'" alt="').concat(c.title,'" loading="lazy" />\n                          \n                          <span class="content_textname" id="content_book_name">').concat(c.title,'</span>\n                          <span class="content_textauthor" id="content_book_author">').concat(c.author,"</span>\n                          </a>\n                </li>")})).join("");return l+=a,a=0,c}(n,e);n.classList.remove("loader"),n.previousElementSibling.insertAdjacentHTML("beforeend",o)}(n,e),n.innerHTML="SEE MORE"})).catch()}u.innerHTML='<div class="content-error"> \n              <img \n              src="'.concat(a("jaTwk"),'"\n              alt="error"\n              class="content_imgError"/>\n         </div>'),m(),document.querySelector(".container-books").addEventListener("click",(function(t){if(t.preventDefault(),"button"!==t.target.type)return;t.target.name!==r&&(l=s());r=t.target.name,f(t.target,r)})),t(i).Notify.init({width:"480px",position:"right-bottom",distance:"10px",opacity:1,fontSize:"20px",clickToClose:!0,timeout:3e3,background:"#4f2ee8"});var _,g={container:document.querySelector(".all-categories-box"),title:document.querySelector(".all-categoris-title"),element:document.querySelector(".all-categoris-element")},p=document.querySelector(".container-books");(0,c.fetchCategoriesList)().then((function(t){var n=t.data,e=n.map((function(t){return'<li class="all-categoris-list">\n      <a class="all-categoris-element" href="" data-name="'.concat(t.list_name,'"\n        >').concat(t.list_name,"</a\n      >\n    </li>\n      ")})).join("");g.container.insertAdjacentHTML("beforeend","".concat(e))})).catch((function(t){console.error("Error:",t)})),g.title.classList.add("current"),g.container.addEventListener("click",(function(){event.preventDefault();var t=event.target;if(!t.classList.contains("all-categoris-element")&&!t.classList.contains("all-categoris-title"))return;var n=t.dataset.name;console.log("Clicked on category: ".concat(n)),e=t,document.querySelectorAll(".all-categoris-list a").forEach((function(t){t.classList.contains("current")&&(_=t)})),void(e!==_&&(e.classList.add("current"),_.classList.remove("current"))),"All categories"===n?m():(o=n,(0,c.fetchBooksByCategory)(o).then((function(t){var n,e,a,c,i,s,l;console.log("Received data from server:",t.data),p.innerHTML="",n=t.data,e=o.split(" "),a=e.slice(0,-1).join(" "),c=e[e.length-1],i='<h1 class="title-container-topBooks">\n    <span class="title_theme">'.concat(a,'</span>\n    <span class="title_blue">').concat(c,"</span></h1>"),s=n.map((function(t,n){return'<li class="content_book" data-id='.concat(t._id,">\n            <a data-id=").concat(t._id,' href="').concat(t.book_image,'" >\n         <img class="content__image" src="').concat(t.book_image,'" alt="').concat(t.title,'" loading="lazy" />\n         \n           <span class="content_textname" id="content_book_name">').concat(t.title,'</span>\n           <span class="content_textauthor" id="content_book_name">').concat(t.author,"</span>\n            </a>\n          </li>")})).join(""),l="".concat(i,'<ul class="content_list_topBooks">').concat(s,"</ul>"),p.insertAdjacentHTML("beforeend",l)})).catch((function(t){console.error("Error:",t)})));var e;var o})),a("kX0OW"),a("1Cek3"),a("9cmFR"),a("gM4a7"),a("iIkkM"),a("7ZZgP")}();
//# sourceMappingURL=index.e63c5954.js.map