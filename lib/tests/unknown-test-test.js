const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/unknown-test');

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 8, sourceType: 'module' }
});

ruleTester.run('unknown-test', rule, {
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
                    assert.equal(result, 3);
                });
            `
        },
        {
            code: `
                test('does something', () => {
                    expect(isTrue(true)).toBeTruthy();
                });
            `
        }
    ],

    invalid: [
        {
            code: `
                test('does nothing', () => {
                    sum(1, 2);
                });
            `,
            errors: [{ message: 'Test methods should include at least one assertion.' }]
        },
        {
            code: `
                it('performs operations', () => {
                    const result = subtract(5, 2);
                });
            `,
            errors: [{ message: 'Test methods should include at least one assertion.' }]
        }
    ]
});
