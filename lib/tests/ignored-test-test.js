const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/ignored-test');

const ruleTester = new RuleTester({parserOptions: { ecmaVersion: 6 }});

ruleTester.run('ignored-test', rule, {
    valid: [
        'test("valid test case", () => {})',
        'it("valid test case", () => {})',
    ],
    invalid: [
        {
            code: 'describe.skip("A skipped test suite", () => {});',
            errors: [{ message: 'Ignored test case found' }],
        },
        {
            code: 'it.skip("ignored test case", () => { })',
            errors: [{ message: 'Ignored test case found' }],
        },
    ],
});