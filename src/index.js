
import "./style.scss";
import Header from './header';
import createHome from './home';
import createMenu from './menu';
import {create, addChilds, addClass} from './helper';
//img
import homeImage from './img/ramen.jpg'
import menuImage from './img/sushi-menu.jpg'
import contactImage from './img/sushi-contact.jpg'


const content = document.getElementById('content');
const tabs = create('div');
tabs.id = 'tabs';
addClass(tabs, 'tabs');




// tabs.appendChild(createHome());
tabs.appendChild(createHome());
// addChilds(content, Header, tabs);
addChilds(content, Header, tabs);


document.getElementById('homeLink').addEventListener('click', changeTab);
document.getElementById('menuLink').addEventListener('click', changeTab);
document.getElementById('contactLink').addEventListener('click', changeTab);

function changeTab(e) {
    const id = e.target.id;
    const currentTab = getCurrentTab();
    if (id === 'homeLink' && currentTab !== 'home') {
        tabs.replaceChildren(createHome());
        content.style.backgroundImage = `url(${homeImage})`;
        content.style.backgroundPosition = `center`;
    } else if (id === 'menuLink' && currentTab !== 'menu') {
        tabs.replaceChildren(createMenu());
        content.style.backgroundImage = `url(${menuImage})`;
        content.style.backgroundPosition = `top right 20%`;
    } else if (currentTab !== 'contact') {

    }
}

function getCurrentTab() {
    return tabs.firstChild.id;
}