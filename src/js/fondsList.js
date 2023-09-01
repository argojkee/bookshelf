const listEl = document.querySelector('.list');

import items from '../data/fonds.json';

function markup(arr) {
  return arr.map(fond => `<li><img src='${fond.img}'/></li>`).join('');
}

listEl.innerHTML = markup(items);
