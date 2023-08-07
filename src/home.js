import {create, addClass, addChilds, createParagraph, createSocial } from './helper'

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

    //Credits
    const titleCredits = create('h2');
    titleCredits.textContent = 'credits';
    const creditsContent = create('div');
    addClass(creditsContent, 'info', 'center', 'end');
    addChilds(creditsContent,
        titleCredits,
        createSocial('', 'Home Image:', 'Photo by Freepik', 'https://www.freepik.es/foto-gratis/fideos-planos-laicos-arreglo-tazon_11741074.htm#query=ramen&position=15&from_view=search&track=sph'),
        createSocial('', 'Menu Image:', 'Photo by Freepik', 'https://www.freepik.es/foto-gratis/rollos-sushi-espacio-copia_9489872.htm#query=japanese%20food&position=7&from_view=search&track=ais'),
        createSocial('', 'Contact Image:', 'Photo by stockking in Freepik', 'https://www.freepik.es/foto-gratis/vista-lateral-mezclar-rollos-sushi-bandeja-jengibre-wasabi_9521218.htm#query=japanese%20food&position=12&from_view=search&track=ais'),
        createSocial('', 'Menu by:', 'SSAM', 'https://drive.google.com/drive/folders/1vISyn5Xq2av_ngiBS__YoPOPhucu81G7'),
        createSocial('fa-github', 'Created by:', 'jonhatanh', 'https://github.com/jonhatanh')
        )


    
    addChilds(home, title, homeContent, creditsContent);
    return home;
}