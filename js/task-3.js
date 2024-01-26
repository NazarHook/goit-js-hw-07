'use strict';
const input = document.getElementById('name-input')
const span = document.getElementById('name-output');
function inputHandler(event) {  
    const inputValue = event.target.value.trim();
    if (inputValue === '') {
      span.textContent = 'Anonymous';
    } else {
      span.textContent = event.target.value;
    }   
}
input.addEventListener('input', inputHandler)

