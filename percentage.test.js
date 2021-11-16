const percentage = require('./percentage');

describe('Test Suite 01: Pruebas de porcentaje', () => {
    test('10 percent of 100 is equal to 10', async () => {
        expect(await percentage(10,100)).toBe(10);
    }, 50000);
    
    test('120 percent of 45 is equal to 54', async () => {
        expect(await percentage(120,45)).toBe(54);
    }, 50000);
    
    test('34.1 percent of 46 is equal to 15.686', async () => {
        expect(await percentage(34.1,46)).toBe(15.686);
    }, 50000);

    test('16 percent of 751.2 is equal to 120.192', async () => {
        expect(await percentage(16,751.2)).toBe(120.192);
    }, 50000);
});
