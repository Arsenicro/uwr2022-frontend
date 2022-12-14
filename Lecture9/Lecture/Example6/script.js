"use strict";
const newNumber = document.getElementById('newNumber');
const count = document.getElementById('count');
const form = document.getElementById('form');
const addNumbers = (a, b) => {
    return Number(a) + Number(b);
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    count.value = addNumbers(count.value, newNumber.value) + '';
    newNumber.value = "";
});
