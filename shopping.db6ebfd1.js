var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},s=i.parcelRequired7c6;null==s&&((s=function(i){if(i in e)return e[i].exports;if(i in t){var s=t[i];delete t[i];var n={id:i,exports:{}};return e[i]=n,s.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+i+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(i,e){t[i]=e},i.parcelRequired7c6=s),s("bdPuw"),s("aBTrw"),s("hjE7W"),s("bUb57"),s("lTi1U"),s("enwL7"),s("kJ3qw"),s("l6875"),s("2qRC4");const n={ul:document.querySelector(".shopping-list"),shoppingListIsEmptyMessage:document.querySelector(".shopping-list-is-empty-message"),title:document.querySelector(".shopping-list-title")},o=JSON.parse(localStorage.getItem("shopping-list"));function l(i){const e=i.map((({book_image:i,title:e,list_name:t,author:s,description:n,buy_links:o,_id:l})=>{n||(n="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ipsa possimus debitis dignissimos ipsum consequuntur voluptatibus facere vero itaque magni, vel veniam delectus provident molestiae id libero totam excepturi perferendis!");return`<li class="shopping-list-item" data-id="${l}">\n        <img class="shopping-list-item-img" src="${i}" width="100" height="142">\n            <div class="shopping-list-item-content-wrapper">\n                <div class="shopping-list-item-head">\n                    <div class="shopping-list-item-head-wrapper">\n                        <h3 class="shopping-list-item-title">${e}</h3>\n                        <p class="shopping-list-item-category">${t}</p>\n                    </div>\n                    <button type="button" class="shopping-list-delete-btn">\n                        <svg class="delete-btn-icon" width="16" height="16">\n                            <use href="./images/sprite.svg#icon-trash">\n                        </svg>\n                    </button>\n                </div>\n            \n\n                <p class="shopping-list-item-description">${n}</p>\n\n                <div class="shopping-list-item-bottom-wrapper">\n                    <p class="shopping-list-item-author">${s}</p>\n\n                    <ul class="shopping-list-buy-links-list">${o.filter((({name:i})=>"Amazon"===i||"Apple Books"===i||"Bookshop"===i)).map((({name:i,url:e})=>"Amazon"===i||"Apple Books"===i||"Bookshop"===i?`<li class="shopping-list-buy-links-item">\n                    <a href="${e}" target="_blank" rel="noopener noreferrer" class="shopping-list-buy-link">\n                        <img src="#" class="shopping-list-buy-link-img" width="16" height="16">\n                    </a>\n                </li>`:void 0)).join("")}</ul>\n                </div>\n            </div>\n    </li>`})).join("");n.ul.innerHTML=e}o&&(n.shoppingListIsEmptyMessage.style.display="none",l(o),n.title.style.marginBottom="40px"),n.ul.addEventListener("click",(function(i){if(i.target.classList.contains("delete-btn-icon")||"BUTTON"===i.target.nodeName){const e=i.target.closest(".shopping-list-item").dataset.id,t=JSON.parse(localStorage.getItem("shopping-list")).filter((({_id:i})=>i!==e));localStorage.removeItem("shopping-list"),n.shoppingListIsEmptyMessage.style.display="flex",n.title.style.marginBottom="120px",0!==t.length&&(localStorage.setItem("shopping-list",JSON.stringify(t)),n.shoppingListIsEmptyMessage.style.display="none",n.title.style.marginBottom="40px"),l(t)}return}));
//# sourceMappingURL=shopping.db6ebfd1.js.map
