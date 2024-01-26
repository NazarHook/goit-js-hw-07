    'use strict';
    const info = {};
        const form = document.querySelector('.login-form')
    const btn = document.querySelector('button')
    const inputValues= document.querySelectorAll('input');
    function submitHandler(event) {
        event.preventDefault();
        inputValues.forEach(el => {
            const name = el.name
            const value = el.value.trim()
        if (value === '') {
            alert('All form fields must be filled in');
        } else {
                info[name] = value; 
        }
        });
        console.log(info);
    }
            
        form.addEventListener('submit', submitHandler)

