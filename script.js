'use strict';
const BaseURL = 'http://89.108.65.123';
const textArea = document.querySelector('.text-area');
const myForm = document.querySelector('.text-form');
const myText = document.querySelector('#myText');

const getMessage = () => {
    fetch(`${BaseURL}/getMessage`).then((res) => {
        return res.text();
    }).then((data) => {
        textArea.innerHTML = data;
    }).catch((err) => {
        console.error(err);
    })
};

const sendMessage = () => {
    const data = myText.value;
    fetch(`${BaseURL}/sendMessage`, {
        method: 'POST',
        body: data,
    }).then(() => {
        myText.value = '';
        getMessage();
    }).catch((err) => {
        console.error(err);
    })
};

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
});
window.onload = () => {
    getMessage();
};