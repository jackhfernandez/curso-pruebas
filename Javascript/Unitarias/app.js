const { checkAndGeneratePhone, checkAndGenerateMail, createElement, checkAndGenerateAge } = require('./util');

const initApp = () => {
    // Inicia la app y registra los eventos a los botones
    const newAgeButton = document.querySelector('#btnAddAge');
    newAgeButton.addEventListener('click', addAge);

    const newPhoneButton = document.querySelector('#btnAddPhone');
    newPhoneButton.addEventListener('click', addPhone);

    const newMailButton = document.querySelector('#btnAddMail');
    newMailButton.addEventListener('click', addMail);
};

const addAge = () => {
    const newUserNameInput = document.querySelector('input#name1');
    const newUserAgeInput = document.querySelector('input#age');

    const outputText = checkAndGenerateAge(
        newUserNameInput.value,
        newUserAgeInput.value
    );

    if (!outputText) {
        return;
    }

    const userList = document.querySelector('.user-list');
    const element = createElement('li', outputText, 'user-item');
    userList.appendChild(element);
};


const addPhone = () => {
    const newUserNameInput = document.querySelector('input#name2');
    const newUserPhoneInput = document.querySelector('input#phone');

    const outputText = checkAndGeneratePhone(
        newUserNameInput.value,
        newUserPhoneInput.value
    );

    if (!outputText) {
        return;
    }
        
    const userList = document.querySelector('.user-list');
    const element = createElement('li', outputText, 'user-item');
    userList.appendChild(element);
};

const addMail = () => {
    const newUserNameInput = document.querySelector('input#name3');
    const newUserMailInput = document.querySelector('input#mail');

    const outputText = checkAndGenerateMail(
        newUserNameInput.value,
        newUserMailInput.value
    );

    if (!outputText) {
        return;
    }
        
    const userList = document.querySelector('.user-list');
    const element = createElement('li', outputText, 'user-item');
    userList.appendChild(element);
};

// Start the app!
initApp();