const { generateAge, generateNumber, createElement, validateInput } = require('./util');

const initApp = () => {
  // Inicia la app y registra los eventos a los botones
  const newAgeButton = document.querySelector('#btnAddAge');
  newAgeButton.addEventListener('click', addAge);

  const newPhoneButton = document.querySelector('#btnAddPhone');
  newPhoneButton.addEventListener('click', addPhone);
};


const addAge = () => {
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  if (
    !validateInput(newUserNameInput.value, true, false) ||
    !validateInput(newUserAgeInput.value, false, true)
  ) {
    return;
  }

  const userList = document.querySelector('.user-list');
  const outputText = generateAge(
    newUserNameInput.value,
    newUserAgeInput.value
  );
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};


const addPhone = () => {
  const newUserNameInput = document.querySelector('input#name');
  const newUserPhoneInput = document.querySelector('input#phone');

  if (
    !validateInput(newUserNameInput.value, true, false) ||
    !validateInput(newUserPhoneInput.value, false, true)
  ) {
    return;
  }

  const userList = document.querySelector('.user-list');
  const outputText = generateNumber(
    newUserNameInput.value,
    newUserPhoneInput.value
  );
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

// Start the app!
initApp();
