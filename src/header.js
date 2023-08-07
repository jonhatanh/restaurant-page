import {create, addClass, addChilds} from './helper'

const header = create('header');

const divLogo = create('div')
const icon = create('i')
addClass(divLogo, 'logo');
addClass(icon, 'fa-solid','fa-bowl-food');

addChilds(divLogo, icon, document.createTextNode('Pho Restaurant'))

const nav = create('nav');
const ul = create('ul');

for(let i = 1; i <= 3; i++) {
    const li = create('li');
    const button = create('button');
    if(i === 1) {
        button.textContent = 'Home';
        button.id = 'homeLink';
    } else if (i === 2) {
        button.textContent = 'Menu';
        button.id = 'menuLink';
    } else {
        button.textContent = 'Contact';
        button.id = 'contactLink';
    }
    li.appendChild(button);
    ul.appendChild(li);
}
nav.appendChild(ul);

addChilds(header, divLogo, nav);

export default header;