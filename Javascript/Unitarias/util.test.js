/*.... Pruebas unitarias ....*/

const { generateAge, generateNumber, generateMail, checkAndGeneratePhone, checkAndGenerateMail, checkAndGenerateAge } = require('./util')

test('deberia mostrar el nombre y la edad', () => {
    const text = generateAge('Felipe', 23);
    expect(text).toBe('Felipe (23 años)');
});

test('deberia mostrar el nombre y el telefono', () => {
    const text = generateNumber('Felipe', 5586048520);
    expect(text).toBe('Felipe (5586048520, móbil)');
});

test('deberia mostrar el nombre y el correo', () => {
    const text = generateMail('Felipe', 'febeja@microsoft.com');
});

/*.... Pruebas de integracion ....*/

test('Debera generar una salida de texto valida', () => {
    const text = checkAndGenerateAge('Marcela', 38);
    expect(text).toBe('Marcela (38 años)');
});

test('Debera generar una salida de texto valida para el telefono', () => {
    const text = checkAndGeneratePhone('Marcela', 5548569274);
    expect(text).toBe('Marcela (5548569274, móbil)');
});

test('Debera generar una salida de texto valida', () => {
    const text = checkAndGenerateMail('Marcela', 'marcela@microsoft.com');
    expect(text).toBe('Marcela (Tu correo es: marcela@microsoft.com)');
});