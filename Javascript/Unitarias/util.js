const generateAge = (name, age) => {
  // Regresa el texto de salida de edad
  return `${name} (${age} años)`;
};

const generateNumber = (name, phoneNumber) => {
  // Regresa el texto de salida de teléfono
  return `${name} (${phoneNumber}, móbil)`;
};

const generateMail = (name, mail) => {
    // Regresa el texto de salida del correo
    return `${name} (Tu correo es: ${mail})`;
}

exports.createElement = (type, text, className) => {
  // Crea un nuevo elemento HTML y lo muestra
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
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

exports.checkAndGenerateAge = (name, age) => {
    if (
        !validateInput(name, true, false) ||
        !validateInput(age, false, true)
    ) {
        return false;
    }
    {
        return generateAge(name, age);
    }
}

exports.checkAndGeneratePhone = (name, phone) => {
    if (
        !validateInput(name, true, false) ||
        !validateInput(phone, false, true)
    ) {
        return false;
    }
    {
        return generateNumber(name, phone);
    }
}

exports.checkAndGenerateMail= (name, mail) => {
    if (
        !validateInput(name, true, false) ||
        !validateInput(mail, false, true)
    ) {
        return false;
    }
    {
        return generateMail(name, mail);
    }
}

exports.generateAge = generateAge;
exports.generateMail = generateMail;
exports.generateNumber = generateNumber;
exports.validateInput = validateInput;