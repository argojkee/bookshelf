import fondlist from '../data/fonds.json';
const fundsList = document.querySelector('.funds-list');
// import '../images/fondsWebp/fonds-x1/medicalCorps.webp';
// import '../images/fondsWebp/fonds-x1/againstHunger.webp';
// import '../images/fondsWebp/fonds-x1/pritula.webp';
// import '../images/fondsWebp/fonds-x1/projectHope.webp';
// import '../images/fondsWebp/fonds-x1/razom.webp';
// import '../images/fondsWebp/fonds-x1/sansFrontieres.webp';
// import '../images/fondsWebp/fonds-x1/saveChildren.webp';
// import '../images/fondsWebp/fonds-x1/united24.webp';
// import '../images/fondsWebp/fonds-x1/worldVision.webp';

const fundsMarkup = fondlist
  .map(
    (fund, index) => `
    
  <li class="fund-item">
    <a href="${fund.url}" target="_blank">
      <span class="fund-number">${(index + 1)
        .toString()
        .padStart(2, '0')}</span>
        <img class="fund-image" src="${fund.img}" alt=""/>
    </a>
  </li>

  `
  )
  .join('');
fundsList.innerHTML = fundsMarkup;
