
const header = document.createElement('header')

const divLogo = document.createElement('div')
const icon = document.createElement('i')
divLogo.classList.add('logo')
icon.classList.add('fa-solid','fa-bowl-food');

divLogo.appendChild(icon);
divLogo.appendChild(document.createTextNode('Pho Restaurant'));

const nav = document.createElement('nav');
const ul = document.createElement('ul');

for(let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    const button = document.createElement('button');
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

header.appendChild(divLogo);
header.appendChild(nav);

export default header;