const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/assertion-roulette');
const ruleTester = new RuleTester({parserOptions: { ecmaVersion: 6 }});
ruleTester.run('assertion-roulette', rule, {

    valid:[{ 
        code: 'test("adds 1 + 2 to equal 3", () => { expect(sum(1, 2)).toBe(3); })',    },
        {
            code: 'test("subtracts 5 - 2 to equal 3", () => { expect(subtract(5, 2)).toBe(3); })',
        },
    ],

    invalid: [
        {
            code: "test('adds multiple values', () => { expect(sum(1, 2)).toBe(3); expect(sum(2, 3)).toBe(5); })",
            errors: [{ message: 'Avoid using assertion roulette' }],
        },
        {
            code: "test('multiplies values', () => { expect(multiply(2, 3)).toBe(6); expect(multiply(3, 4)).toBe(12); expect(multiply(4, 5)).toBe(20); })",
            errors: [{ message: 'Avoid using assertion roulette' }],
        },
        {
            code: "test('checks boolean values', () => { expect(isTrue(true)).toBe(true); expect(isFalse(false)).toBe(false); expect(isTrue(1)).toBe(true); expect(isFalse(0)).toBe(false); })",
            errors: [{ message: 'Avoid using assertion roulette' }],
        },
        {
            code: "test('compares strings', () => { expect(compare('a', 'a')).toBe(true); expect(compare('a', 'b')).toBe(false); expect(compare('abc', 'abc')).toBe(true); expect(compare('abc', 'abcd')).toBe(false); expect(compare('hello', 'hello')).toBe(true); })",
            errors: [{ message: 'Avoid using assertion roulette' }],
        },
        {
            code: "test('validates numbers', () => { expect(isEven(2)).toBe(true); expect(isOdd(3)).toBe(true); expect(isEven(4)).toBe(true); expect(isOdd(5)).toBe(true); expect(isEven(6)).toBe(true); expect(isOdd(7)).toBe(true); })",
            errors: [{ message: 'Avoid using assertion roulette' }],
        },
    ],
})