'use strict';

const form = document.querySelector('.login-form');
const inputValues = document.querySelectorAll('input');

function submitHandler(event) {
  const info = {};

  event.preventDefault();

  for (const el of inputValues) {
    const name = el.name;
    const value = el.value.trim();

    if (value === '') {
      alert('All form fields must be filled in');
      return; 
    } else {
      info[name] = value;
    }
  }
  console.log(info);
  form.reset();
}

form.addEventListener('submit', submitHandler);
