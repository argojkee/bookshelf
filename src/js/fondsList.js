import fondlist from '../data/fonds.json';
import medicalCorps from '../images/fondsWebp/fonds-x1/medicalCorps.webp';
import againstHunger from '../images/fondsWebp/fonds-x1/againstHunger.webp';
import pritula from '../images/fondsWebp/fonds-x1/pritula.webp';
import projectHope from '../images/fondsWebp/fonds-x1/projectHope.webp';
import razom from '../images/fondsWebp/fonds-x1/razom.webp';
import sansFrontieres from '../images/fondsWebp/fonds-x1/sansFrontieres.webp';
import saveChildren from '../images/fondsWebp/fonds-x1/saveChildren.webp';
import united24 from '../images/fondsWebp/fonds-x1/united24.webp';
import worldVision from '../images/fondsWebp/fonds-x1/worldVision.webp';

const fundsList = document.querySelector('.funds-list');

const fundsMarkup = fondlist
  .map((fund, index) => {
    let currentImg = null;
    if (fund.title === 'Save the Children') {
      currentImg = saveChildren;
    } else if (fund.title === 'Project HOPE') {
      currentImg = projectHope;
    } else if (fund.title === 'UNITED24') {
      currentImg = united24;
    } else if (fund.title === 'International Medical Corps') {
      currentImg = medicalCorps;
    } else if (fund.title === 'Medicins Sans Frontieres') {
      currentImg = sansFrontieres;
    } else if (fund.title === 'RAZOM') {
      currentImg = razom;
    } else if (fund.title === 'Action against hunger') {
      currentImg = againstHunger;
    } else if (fund.title === 'World vision') {
      currentImg = worldVision;
    } else if (fund.title === 'Serhiy Prytula Charity Foundation') {
      currentImg = pritula;
    }

    return `
    <li class="fund-item">
      <a href="${fund.url}" target="_blank">
        <span class="fund-number">${(index + 1)
          .toString()
          .padStart(2, '0')}</span>
          <img class="fund-image" src="${currentImg}" alt=""/>
      </a>
    </li>

    `;
  })
  .join('');

fundsList.innerHTML = fundsMarkup;
