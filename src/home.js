import {create, addClass, addChilds, createParagraph } from './helper'

export default function() {
    const home = create('div');
    home.id = 'home';
    
    const title = create('h2');
    title.textContent = 'home';
    
    const homeContent = create('div');
    addClass(homeContent, 'info', 'center');

    const button = create('button');
    button.id = "menuLinkBtn";
    button.textContent = "Go to menu";
    
    addChilds(homeContent,
        createParagraph(`Welcome to Pho. Indulge in a Culinary Journey!`),
        createParagraph(`At Pho, we invite you to experience a world of exquisite flavors and unforgettable dining. Step into a warm and inviting ambiance where every dish tells a story and every meal becomes a cherished memory.`),
        createParagraph(`Discover a diverse and mouthwatering menu that celebrates the finest ingredients and culinary traditions. From signature dishes prepared by our skilled chefs to seasonal specials that reflect the essence of each season, our menu is a celebration of culinary craftsmanship.`),
        button
        );
    
    addChilds(home, title, homeContent);
    return home;
}