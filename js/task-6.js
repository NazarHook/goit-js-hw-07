'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
const box = document.querySelector('#controls');
const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newEl = document.createElement('div');
    const size = 30 + i * 10
    newEl.style.width = `${size}px`
    newEl.style.height = `${size}px`
    newEl.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(newEl);
  }
}
function destroyBoxes() {
  boxes.innerHTML = '';
}

function clickHandler(event) {
 const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
   destroyBoxes();
    createBoxes(amount);
     input.value = '';
 } 
}

create.addEventListener('click', clickHandler);
destroy.addEventListener('click', destroyBoxes)
