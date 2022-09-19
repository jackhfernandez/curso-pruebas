exports.generateAge = (name, age) => {
  // Regresa el texto de salida de edad
  return `${name} (${age} años)`;
};

exports.generateNumber = (name, phoneNumber) => {
  // Regresa el texto de salida de teléfono
  return `${name} (${phoneNumber}, móbil)`;
};

exports.createElement = (type, text, className) => {
  // Crea un nuevo elemento HTML y lo muestra
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

exports.validateInput = (text, notEmpty, isNumber) => {
  // Valida el valor ingresado con dos reglas predefinidas
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};
