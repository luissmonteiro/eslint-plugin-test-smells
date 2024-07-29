const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/assertion-roulette');
const ruleTester = new RuleTester({parserOptions: { ecmaVersion: 6 }});
ruleTester.run('assertion-roulette', rule, {

    valid:[{ 
        code: 'test("adds 1 + 2 to equal 3", () => { expect(sum(1, 2)).toBe(3); })',
    }],

    invalid: [
        {
            code: "test('adds 1 + 2 to equal 3', () => { expect(sum(1, 2)).toBe(3); expect(sum(3, 4)).toBe(7); })",
            errors: [{ message: 'Avoid using assertion roulette' }],
        },
    ],
})