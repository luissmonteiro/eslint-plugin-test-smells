const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/eager-test');

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 8, sourceType: 'module' }
});

ruleTester.run('eager-test', rule, {
    valid: [
        {
            code: `
                test('adds numbers', () => {
                    expect(sum(1, 2)).toBe(3);
                });
            `
        },
        {
            code: `
                it('subtracts numbers', () => {
                    const result = subtract(5, 2);
                    expect(result).toBe(3);
                });
            `
        },
        {
            code: `
                test('does multiple operations', () => {
                    expect(sum(1, 2)).toBe(3);
                    expect(subtract(5, 2)).toBe(3);
                });
            `
        },
        {
            code: `
                it('performs multiple tasks', () => {
                    const add = sum(1, 2);
                    const sub = subtract(5, 2);
                    expect(add).toBe(3);
                    expect(sub).toBe(3);
                });
            `
        }
    ],

    invalid: [
        {
            code: `it('calls multiple methods', () => {
                    const a = method1();
                    const b = method2();
                    const c = method3();
                    const d = method4();
                    const e = method5();
                    const f = method6();
                    expect(a).toBe(1);
                    expect(b).toBe(2);
                    expect(c).toBe(3);
                    expect(d).toBe(4);
                    expect(e).toBe(5);
                    expect(f).toBe(6);
                });
            `,
            errors: [{ message: 'Avoid calling multiple production methods in a single test.' }]
        },
        {
            code: `test('calls multiple methods', () => {
                    const a = getData();
                    const b = treatData(b);
                    const c = sendData(b);
                    const d = sendEmailToUser(c);
                    expect(a).toBe(1);
                    expect(b).toBe(2);
                    expect(c).toBe(3);
                    expect(d).toBe(4);
                });
            `,
            errors: [{ message: 'Avoid calling multiple production methods in a single test.' }]
        }
    ]
});
