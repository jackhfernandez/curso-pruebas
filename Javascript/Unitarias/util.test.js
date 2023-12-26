const puppeteer = require('puppeteer');
const { generateAge, generateNumber, generateMail, checkAndGeneratePhone, checkAndGenerateMail, checkAndGenerateAge } = require('./util')

/*.... Pruebas unitarias ....*/

describe('Serie de pruebas unitarias', () => {
    test('deberia mostrar el nombre y la edad', () => {
        const text = generateAge('Felipe', 23);
        expect(text).toBe('Felipe (23 años)');
    });

    test('deberia mostrar el nombre y el telefono', () => {
        const text = generateNumber('Felipe', 5586048520);
        expect(text).toBe('Felipe (5586048520, móbil)');
    });

    test('deberia mostrar el nombre y mail', () => {
        const text = generateMail('Felipe', 'felipe@microsoft.com');
        expect(text).toBe('Felipe (Tu correo es: felipe@microsoft.com)');
    });
});

/*.... Pruebas de integracion ....*/

describe('Serie de pruebas de integracion', () => {
    test('Debera generar una salida de texto valida para la edad', () => {
        const text = checkAndGenerateAge('Marcela', 38);
        expect(text).toBe('Marcela (38 años)');
    });

    test('Debera generar una salida de texto valida para el telefono', () => {
        const text = checkAndGeneratePhone('Marcela', 5548569274);
        expect(text).toBe('Marcela (5548569274, móbil)');
    });

    test('Debera generar una salida de texto valida para el correo', () => {
        const text = checkAndGenerateMail('Marcela', 'marcela@microsoft.com');
        expect(text).toBe('Marcela (Tu correo es: marcela@microsoft.com)');
    });
});

/*.... Pruebas E2E ....*/

describe('Serie de pruebas E2E', () => {
    test('Probando el formulario para la edad', async () => {
        const explore = await puppeteer.launch({
            headless: false,
            slowMo: 40,
            args: ['--window-size=1920, 1080']
        });

        const page = await explore.newPage();
        await page.goto('file:///D:/Repos/curso-pruebas/Javascript/Unitarias/index.html');

        await page.click('input#name1');
        await page.type('input#name1', 'Miranda');

        await page.click('input#age');
        await page.type('input#age', '25');

        await page.click('#btnAddAge');
    }, 10000);

    test('Probando el formulario de telefono', async () => {
        const explore = await puppeteer.launch({
            headless: false,
            slowMo: 40,
            args: ['--window-size=1920, 1080']
        });

        const page = await explore.newPage();
        await page.goto('file:///D:/Repos/curso-pruebas/Javascript/Unitarias/index.html');

        await page.click('input#name2');
        await page.type('input#name2', 'Miranda');

        await page.click('input#phone');
        await page.type('input#phone', '5548569274');

        await page.click('#btnAddPhone');
    }, 20000);

    test('Probando el formulario de correo', async () => {
        const explore = await puppeteer.launch({
            headless: false,
            slowMo: 40,
            args: ['--window-size=1920, 1080']
        });

        const page = await explore.newPage();
        await page.goto('file:///D:/Repos/curso-pruebas/Javascript/Unitarias/index.html');

        await page.click('input#name3');
        await page.type('input#name3', 'Miranda');

        await page.click('input#mail');
        await page.type('input#mail', 'miranda@microsoft.com');

        await page.click('#btnAddMail');
    }, 30000);

    
});