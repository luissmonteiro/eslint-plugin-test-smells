const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/sleepy-test');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2020 } });

ruleTester.run('sleepy-test', rule, {
    valid: [
        {
            code: `test('does not use setTimeout', () => { expect(1 + 1).toBe(2); });`,
        },
        {
            code: `
                test('uses async/await instead of setTimeout', async () => {
                    await new Promise(resolve => setImmediate(resolve));
                    expect(1 + 1).toBe(2);
                });
            `,
        },
        {
            code: `
                it('does not use setTimeout', function() {
                    expect(someFunction()).toEqual(true);
                });
            `,
        },
    ],

    invalid: [
        {
            code: `
                test('uses setTimeout', () => {
                    setTimeout(() => {
                        expect(1 + 1).toBe(2);
                    }, 1000);
                });
            `,
            errors: [{ message: 'Avoid using setTimeout in test code.' }],
        },
        {
            code: `
                it('uses setTimeout', function() {
                    setTimeout(() => {
                        expect(someFunction()).toBe(true);
                    }, 500);
                });
            `,
            errors: [{ message: 'Avoid using setTimeout in test code.' }],
        },
        {
            code: `
                test('uses setTimeout indirectly', () => {
                    global.setTimeout(() => {
                        expect(1 + 1).toBe(2);
                    }, 1000);
                });
            `,
            errors: [{ message: 'Avoid using setTimeout in test code.' }],
        },
        {
            code: `
                test('uses an alias for setTimeout', () => {
                    const delay = setTimeout;
                    delay(() => {
                        expect(1 + 1).toBe(2);
                    }, 1000);
                });
            `,
            errors: [{ message: 'Avoid using setTimeout in test code.' }],
        },
    ],
});
