const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$28.99', 'Oatmeal -$21.50', 'Frittata -$15'];
const mainCourseMenu = ['Steak- $45', 'Pasta- $22.99', 'Burger- $12', 'Salmon- $25'];
const dessertMenu = ['Cake- $11', 'Ice Cream- $9', 'Pudding- $12', 'Fruit Salad- $15'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;