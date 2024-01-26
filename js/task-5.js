'use strict';
  'use strict';
  const btn = document.querySelector('.change-color');
  const bg = document.querySelector('body');
  const span = document.querySelector('.color');
function clickHandler(event) {
  event.preventDefault();
   span.textContent = getRandomHexColor();
    bg.style.backgroundColor = span.textContent;
  }
  btn.addEventListener('click', clickHandler);
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
