'use strict';
const BaseURL = 'http://127.0.0.1:156';

const myFormText = document.querySelector('.text-form');
const myText = document.querySelector('#myText');
const textAreaMessage = document.querySelector('.text-area-message');

const myFormId = document.querySelector('.id-form');
const idUser = document.querySelector('#idUser');
const textAreaId = document.querySelector('.text-area-id');

const myFormAllUsers = document.querySelector('.all-users-form');
const textAreaAllUsers = document.querySelector('.text-area-all-users');


const getMessage = () => {
    fetch(`${BaseURL}/getMessage`).then((res) => {
        return res.text();
    }).then((data) => {
        textAreaMessage.innerHTML = data;
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

const sendIdUser = () => {
    const data = idUser.value;
    fetch(`${BaseURL}/user`, {
        method: 'POST',
        body: data,
    }).then(() => {
        idUser.value = '';
        getUser(data);
    }).catch((err) => {
        console.error(err);
    })
};

const getUser = (data) => {
    fetch(`${BaseURL}/user/${data}`).then((res) => {
        return res.text();
    }).then((data) => {
        textAreaId.innerHTML = data;
    }).catch((err) => {
        console.error(err);
    })
};

const getAllUser = () => {
    fetch(`${BaseURL}/user`).then((res) => {
        return res.text();
    }).then((data) => {
        textAreaAllUsers.innerHTML = data;
    }).catch((err) => {
        console.error(err);
    })
};


myFormText.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
});

myFormId.addEventListener('submit', (e) => {
    e.preventDefault();
    sendIdUser();
});

myFormAllUsers.addEventListener('submit', (e) => {
    e.preventDefault();
    getAllUser();
});

window.onload = () => {
    getMessage();

};