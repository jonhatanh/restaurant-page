import * as help from './helper';
import foodsData from './foods.json';

export default function () {
    const menu = help.create('div');
    menu.id = 'menu';

    const title = help.create('h2');
    title.textContent = 'menu';

    const foods = help.create('div');
    help.addClass(foods, 'foods');

    for (let categoryName in foodsData) {
        console.log(categoryName);
        const category = help.createGeneralCategory(categoryName);
        for (let subCategoryName in foodsData[categoryName]) {
            console.log(subCategoryName);
            const subCategory = help.createProductsCategory(subCategoryName);
            for (let product of foodsData[categoryName][subCategoryName]) {
                if(product.name === undefined) {
                    subCategory.appendChild(
                        help.createProductDescription(product.description)
                    );
                    continue;
                }
                subCategory.appendChild(
                    help.createProduct(
                        product.name,
                        product.price,
                        product.description
                    )
                );
            }
            category.appendChild(subCategory);
        }
        foods.appendChild(category);
    }


    help.addChilds(menu, title, foods);
    return menu;
}