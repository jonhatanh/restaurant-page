import {create, addClass, addChilds, createSocial, createParagraph} from './helper';

export default function () {
    const contact = create('div');
    contact.id = 'contact';
    
    const title = create('h2');
    title.textContent = 'contact us';
    
    const contactContent = create('div');
    addClass(contactContent, 'info');
    
    addChilds(contactContent,
        createParagraph(`Have questions, suggestions, or just want to say hello? We're here to help! Feel free to reach out to our dedicated support team using the contact information below:`),
        createSocial('fa-phone', 'Phone:', '+1-123-456-7890'),
        createSocial('fa-envelope', 'Email:', 'pho_restaurant@example.com','#'),
        createParagraph(`Our friendly team is available to assist you from Monday to Friday, 13:00 PM to 22:00 PM (GMT). We strive to respond to all inquiries within 24 hours.`),
        createParagraph(`You can also connect with us on social media:`),
        createSocial('fa-square-facebook', '', 'Pho Restaurant','#'),
        createSocial('fa-instagram', '', '@pho_restaurant','#'),
        createParagraph(`We value your feedback and are committed to providing the best experience possible. Your input helps us improve and serve you better.`),
        createParagraph(`Don't hesitate to get in touch. We're looking forward to hearing from you!`),
        );
    
    
    
    
    addChilds(contact, title, contactContent);
    return contact;
}