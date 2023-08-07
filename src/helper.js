
export function create(name){
    return document.createElement(name);   
}

export function addClass(element, ...classes) {
    for(let cssClass of classes) {
        if(cssClass === '') continue;
        element.classList.add(cssClass);
    }
}

export function addChilds(element, ...childs) {
    for(let child of childs) {
        element.appendChild(child);
    }
}

export function createGeneralCategory(name) {
    const div = create('div');
    const title = create('h4');
    addClass(div, 'category');
    title.textContent = name;
    div.appendChild(title);
    return div
}

export function createProductsCategory(name = null, photoId = false) {
    const div = create('div');
    addClass(div, 'products');
    if(name !== null || name !== '') {
        const title = create('h5');
        title.textContent = name;
        div.appendChild(title);
    }
    return div

}

export function createProduct(name, price, desc = null, photoId = false) {
    const div = create('div');
    const namePrice = create('div');
    const title = desc === null ? create('h6') : create('h5');
    const priceSpan = create('span');
    addClass(div, 'product');
    addClass(namePrice, 'name-price');
    title.textContent = name;
    priceSpan.textContent = price;

    addChilds(namePrice, title, priceSpan);
    div.appendChild(namePrice);

    if(desc !== null) {
        const description = create('p');
        description.textContent = desc;
        div.appendChild(description);
    }
    return div;
}
export function createProductDescription(desc) {
    const div = create('div');
    addClass(div, 'product');
    const description = create('p');
    description.textContent = desc;
    div.appendChild(description);
    return div;
}

export function createSocial(iconName, name, data, url = null) {
    const social = create('div');
    const icon = create('i');
    const spanName = create('span');
    const spanData = create('span');
    addClass(social, 'social');
    addClass(icon, 'fa-solid', iconName.includes('facebook') || iconName.includes('instagram') || iconName.includes('git') ? 'fa-brands' : '', iconName);
    addClass(spanName, 'social-name');
    addClass(spanData, 'social-data');
    spanName.textContent = name;

    if(url === null) {
        spanData.textContent = data;
    } else {
        const a = create('a');
        a.href = url;
        a.textContent = data;
        spanData.appendChild(a);
    }
    addChilds(social, icon, spanName, spanData);
    return social;
}
export function createParagraph(text) {
    const p = create('p');
    p.textContent = text;
    return p;
}