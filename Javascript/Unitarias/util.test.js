const { generateAge, generateNumber, generateMail } = require('./util')

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