
import "./style.scss";
import Header from './header';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';
import {create, addChilds, addClass} from './helper';
//img
import homeImage from './img/ramen-min.jpg'
import menuImage from './img/sushi-menu-min.jpg'
import contactImage from './img/sushi-contact-min.jpg'


const content = document.getElementById('content');
const tabs = create('div');
tabs.id = 'tabs';
addClass(tabs, 'tabs');


tabs.appendChild(createHome());
addChilds(content, Header, tabs);


document.getElementById('homeLink').addEventListener('click', changeTab);
document.getElementById('menuLink').addEventListener('click', changeTab);
document.getElementById('contactLink').addEventListener('click', changeTab);
document.getElementById('menuLinkBtn').addEventListener('click', changeTab);

function changeTab(e) {
    const id = e.target.id;
    const currentTab = getCurrentTab();
    if (id === 'homeLink' && currentTab !== 'home') {
        tabs.replaceChildren(createHome());
        content.style.backgroundImage = `url(${homeImage})`;
        content.style.backgroundPosition = `center`;
        document.getElementById('menuLinkBtn').addEventListener('click', changeTab);
    } else if ((id === 'menuLink' && currentTab !== 'menu') || id === 'menuLinkBtn') {
        tabs.replaceChildren(createMenu());
        content.style.backgroundImage = `url(${menuImage})`;
        content.style.backgroundPosition = `top right 20%`;
    } else if (id === 'contactLink' && currentTab !== 'contact') {
        tabs.replaceChildren(createContact());
        content.style.backgroundImage = `url(${contactImage})`;
        content.style.backgroundPosition = `center`;
    }
}

function getCurrentTab() {
    return tabs.firstChild.id;
}