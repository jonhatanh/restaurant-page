import {create, addClass, addChilds } from './helper'

export default function() {
    const home = create('div');
    home.id = 'home';
    
    const title = create('h2');
    title.textContent = 'Home';
    
    const homeContent1 = create('div');
    addClass(homeContent1, 'home-content')
    const title1 = create('h4');
    const p1 = create('p');
    title1.textContent = 'Title 1'
    p1.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque sint quibusdam sed aperiam.
    Distinctio omnis eligendi non harum et excepturi molestiae necessitatibus voluptate cumque
    cupiditate, porro, magni, consequatur id!`;
    addChilds(homeContent1, title1, p1);
    
    
    
    
    addChilds(home, title, homeContent1);
    return home;
}