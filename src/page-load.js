
import Header from './header';
import Home from './home';
import {create} from './helper';

export default function() {
    const content = document.getElementById('content');
    const tabs = create('div');
    tabs.id = 'tabs';
    
    tabs.appendChild(Home);
    content.appendChild(Header);
    content.appendChild(tabs);

}