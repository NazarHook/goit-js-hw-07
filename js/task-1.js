    'use strict'
    const categories = document.querySelector('#categories')         
    const items = categories.querySelectorAll('li.item');
    const numberOfCategories = categories.childElementCount
console.log(`Number of categories: ${numberOfCategories}`)
    items.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li');
    const numberOfElements = categoryElements.length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Number of elements: ${numberOfElements}`);
    });
