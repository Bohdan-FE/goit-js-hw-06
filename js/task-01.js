const items = document.querySelectorAll(".item");
console.dir('Number of categories: ' + items.length);
items.forEach(el => {
    console.dir('Category: ' + el.firstElementChild.textContent);
    console.dir('Elements: ' + el.lastElementChild.children.length);
});