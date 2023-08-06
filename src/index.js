
import "./style.scss";
import Header from './header';
import createHome from './home';
import createMenu from './menu';
import {create, addChilds, addClass} from './helper';


const content = document.getElementById('content');
const tabs = create('div');
tabs.id = 'tabs';
addClass(tabs, 'tabs');




// tabs.appendChild(createHome());
tabs.appendChild(createMenu());
// addChilds(content, Header, tabs);
addChilds(content, Header, tabs);

