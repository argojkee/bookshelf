document.createElementNS("http://www.w3.org/2000/svg","svg");const t=document.querySelector(".container-books");null==t||t.addEventListener("click",(function(t){if(t.preventDefault(),!t.target.closest("li"))return;e.classList.toggle("hidden"),e.classList.toggle("active")}));const e=document.querySelector('[data-modal="1"]');document.querySelector(".modal-btn-close").addEventListener("click",(function(t){e.classList.toggle("hidden"),e.classList.toggle("active")}));const s={ul:document.querySelector(".shopping-list"),shoppingListIsEmptyMessage:document.querySelector(".shopping-list-is-empty-message"),title:document.querySelector(".shopping-list-title")},i=JSON.parse(localStorage.getItem("shopping-list"));function n(t){const e=t.map((({book_image:t,title:e,list_name:s,author:i,description:n,buy_links:o,_id:l})=>{n||(n="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ipsa possimus debitis dignissimos ipsum consequuntur voluptatibus facere vero itaque magni, vel veniam delectus provident molestiae id libero totam excepturi perferendis!");return`<li class="shopping-list-item" data-id="${l}">\n        <img class="shopping-list-item-img" src="${t}" width="100" height="142">\n            <div class="shopping-list-item-content-wrapper">\n                <div class="shopping-list-item-head">\n                    <div class="shopping-list-item-head-wrapper">\n                        <h3 class="shopping-list-item-title">${e}</h3>\n                        <p class="shopping-list-item-category">${s}</p>\n                    </div>\n                    <button type="button" class="shopping-list-delete-btn">\n                        <svg class="delete-btn-icon" width="16" height="16">\n                            <use href="./images/sprite.svg#icon-trash">\n                        </svg>\n                    </button>\n                </div>\n            \n\n                <p class="shopping-list-item-description">${n}</p>\n\n                <div class="shopping-list-item-bottom-wrapper">\n                    <p class="shopping-list-item-author">${i}</p>\n\n                    <ul class="shopping-list-buy-links-list">${o.filter((({name:t})=>"Amazon"===t||"Apple Books"===t||"Bookshop"===t)).map((({name:t,url:e})=>"Amazon"===t||"Apple Books"===t||"Bookshop"===t?`<li class="shopping-list-buy-links-item">\n                    <a href="${e}" target="_blank" rel="noopener noreferrer" class="shopping-list-buy-link">\n                        <img src="#" class="shopping-list-buy-link-img" width="16" height="16">\n                    </a>\n                </li>`:void 0)).join("")}</ul>\n                </div>\n            </div>\n    </li>`})).join("");s.ul.innerHTML=e}i&&(s.shoppingListIsEmptyMessage.style.display="none",n(i),s.title.style.marginBottom="40px"),s.ul.addEventListener("click",(function(t){if(t.target.classList.contains("delete-btn-icon")||"BUTTON"===t.target.nodeName){const e=t.target.closest(".shopping-list-item").dataset.id,i=JSON.parse(localStorage.getItem("shopping-list")).filter((({_id:t})=>t!==e));localStorage.removeItem("shopping-list"),s.shoppingListIsEmptyMessage.style.display="flex",s.title.style.marginBottom="120px",0!==i.length&&(localStorage.setItem("shopping-list",JSON.stringify(i)),s.shoppingListIsEmptyMessage.style.display="none",s.title.style.marginBottom="40px"),n(i)}return}));
//# sourceMappingURL=shopping.3c3e3f34.js.map
