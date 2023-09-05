import { fondlist } from './fondsarray';
const fundsList = document.querySelector('.funds-list');

const fundsMarkup = fondlist
  .map(
    (fund, index) => `
  <li class="fund-item">
    <a class="fund-item-link" href="${fund.url}" target="_blank">
      <span class="fund-number">${(index + 1)
        .toString()
        .padStart(2, '0')}</span>
        <div class="fund-img-wrapper">
        <img class="fund-image" src="${fund.img}" alt=""/>
        </div>
    </a>
  </li>

  `
  )
  .join('');
fundsList.innerHTML = fundsMarkup;
