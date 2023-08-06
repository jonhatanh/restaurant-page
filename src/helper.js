
export function create(name){
    return document.createElement(name);   
}

export function addClass(element, ...classes) {
    for(let cssClass of classes) {
        element.classList.add(cssClass);
    }
}

export function addChilds(element, ...childs) {
    for(let child of childs) {
        element.appendChild(child);
    }
}