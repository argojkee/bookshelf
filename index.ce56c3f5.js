function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("ekb7P",(function(e,t){e.exports=new URL(a("kyEFX").resolve("5lkeA"),import.meta.url).toString()})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.ce56c3f5.js","5lkeA":"Books.34b8761e.png","4jukI":"shopping.60f67ad3.js"}')),a("hjE7W"),a("bUb57");var s=a("1Xv76"),i=(a("1Xv76"),a("7Y9D8"));s=a("1Xv76");function l(){return document.documentElement.clientWidth<768?1:document.documentElement.clientWidth>767&&document.documentElement.clientWidth<1140?3:document.documentElement.clientWidth>1139?5:void 0}let c=l();document.querySelector("content_loadBooks");const r=document.querySelector(".container-books"),d=document.querySelector(".content");function u(){r.innerHTML="",d.classList.add("content-loader"),(0,s.fetchToAllBooks)().then((e=>e.data)).then((e=>{d.classList.remove("content-loader"),r.innerHTML=` <h1 class="title-container-topBooks"><span class="title_theme">Best sellers</span> <span class="title_blue"> books </span></h1>\n  <ul class="content_list_categories">${e.map((e=>`<li class="content_categoryItem ${e.list_name}">\n      <span class="content_category">${e.list_name}</span>\n                <ul class="content_list_topBooks">${e.books.map(((e,t)=>{if(t<l())return`<li class="content_book">\n                          <a data-id=${e._id} href="${e.book_image}"  class="content-book-link" >\n                        \n                          <img class="content__image" src="${e.book_image}" alt="${e.title}" loading="lazy" />\n                         \n                         <span class="content_textname" id="content_book_name">${e.title}</span>\n                         <span class="content_textauthor" id="content_book_name">${e.author}</span>\n                           </a>\n                          </li>`})).join("")}</ul>\n          \n               \n                <button class="content_btnSeeMore"\n                        type="button"\n                        name="${e.list_name}" \n                        action="submit">SEE MORE\n                </button>                                                    \n          </li>`)).join("")}</ul>`}))}function m(t){(0,s.fetchBooksByCategory)(t.name).then((e=>(t.classList.remove("loader"),e.data))).then((n=>{!function(t,n){let o=(a=t,s=n,s.map(((t,n)=>{if(n>=c)return n+1===s.length&&(function(e){e.classList.add("hidden")}(a),null!=a.parentNode.nextSibling&&a.parentNode.nextSibling.firstElementChild.classList.add("contend_categoryMove"),e(i).Notify.info("this is all. Check out other category books")),`<li class="content_book">\n                          <a data-id=${t._id} href="${t.book_image}" class="content-book-link" >\n                          <img class="content__image" src="${t.book_image}" alt="${t.title}" loading="lazy" />\n                          \n                          <span class="content_textname" id="content_book_name">${t.title}</span>\n                          <span class="content_textauthor" id="content_book_author">${t.author}</span>\n                          </a>\n                </li>`})).join(""));var a,s;t.previousElementSibling.insertAdjacentHTML("beforeend",o)}(t,n),t.innerHTML="SEE MORE"})).catch()}r.innerHTML=`<div class="content-error"> \n              <img \n              src="${a("ekb7P")}"\n              alt="error"\n              class="content_imgError"/>\n         </div>`,u();document.querySelector(".container-books").addEventListener("click",(function(e){if(e.preventDefault(),"button"!==e.target.type)return;m(e.target)})),e(i).Notify.init({width:"480px",position:"right-bottom",distance:"10px",opacity:1,fontSize:"20px",clickToClose:!0,timeout:3e3,background:"#4f2ee8"});const _={container:document.querySelector(".all-categories-box"),title:document.querySelector(".all-categoris-title"),element:document.querySelector(".all-categoris-element"),booksContainer:document.querySelector(".container-books")},p=document.querySelector(".container-books");let f;(0,s.fetchCategoriesList)().then((e=>{const t=e.data,n=t.map((e=>`<li class="all-categoris-list">\n      <a class="all-categoris-element" href="" data-name="${e.list_name}"\n        >${e.list_name}</a\n      >\n    </li>\n      `)).join("");_.container.insertAdjacentHTML("beforeend",`${n}`)})).catch((e=>{console.error("Error:",e)})),_.title.classList.add("current"),_.container.addEventListener("click",(function(){event.preventDefault();const e=event.target;if(!e.classList.contains("all-categoris-element")&&!e.classList.contains("all-categoris-title"))return;const t=e.dataset.name;n=e,document.querySelectorAll(".all-categoris-list a").forEach((e=>{e.classList.contains("current")&&(f=e)})),void(n!==f&&(n.classList.add("current"),f.classList.remove("current"))),"All categories"===t?u():(_.booksContainer.innerHTML="",_.booksContainer.classList.add("content-loader"),o=t,(0,s.fetchBooksByCategory)(o).then((e=>{console.log("Received data from server:",e.data),_.booksContainer.classList.remove("content-loader"),function(e,t){const n=t.split(" "),o=n.slice(0,-1).join(" "),a=n[n.length-1],s=`<h1 class="title-container-topBooks">\n    <span class="title_theme">${o}</span>\n    <span class="title_blue">${a}</span></h1>`,i=e.map(((e,t)=>`<li class="content_book" data-id=${e._id}>\n            <a data-id=${e._id} href="${e.book_image}" >\n         <img class="content__image" src="${e.book_image}" alt="${e.title}" loading="lazy" />\n         \n           <span class="content_textname" id="content_book_name">${e.title}</span>\n           <span class="content_textauthor" id="content_book_name">${e.author}</span>\n            </a>\n          </li>`)).join(""),l=`${s}<ul class="content_list_topBooks">${i}</ul>`;p.insertAdjacentHTML("beforeend",l)}(e.data,o)})).catch((e=>{console.error("Error:",e)})));var n;var o})),a("lTi1U"),a("7Jfzs"),a("enwL7"),a("kJ3qw"),a("l6875"),a("2qRC4");
//# sourceMappingURL=index.ce56c3f5.js.map
