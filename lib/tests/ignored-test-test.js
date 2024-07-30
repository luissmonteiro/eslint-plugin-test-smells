const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/ignored-test');

const ruleTester = new RuleTester({parserOptions: { ecmaVersion: 6 }});

ruleTester.run('ignored-test', rule, {
    valid: [
        'test("valid test case", () => {})',
        'it("valid test case", () => {})',
        {
            code: 'function foo() { console.log("Hello, world!"); }'
        },
        {code: 'console.log("Hello, world!");'},
        {code: 'const message = "Hello, world!"; console.log(message);'},
        {code: 'function greet() { return "Hello, world!"; } console.log(greet());'},
        {code: 'const arr = [1, 2, 3]; arr.forEach(num => console.log(num));'},
        {code: 'const obj = { a: 1, b: 2 }; console.log(obj.a);'}
    
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
        {
            code: 'test.skip("A skipped test case", () => { })',
            errors: [{ message: 'Ignored test case found' }],
        },
        {
            code: 'describe.only("An exclusive test suite", () => {});',
            errors: [{ message: 'Ignored test case found' }],
        },
        {
            code: 'it.only("An exclusive test case", () => { })',
            errors: [{ message: 'Ignored test case found' }],
        },
        {
            code: 'test.only("An exclusive test case", () => { })',
            errors: [{ message: 'Ignored test case found' }],
        },
        {
            code: 'context.skip("A skipped context suite", () => {});',
            errors: [{ message: 'Ignored test case found' }],
        },
        {
            code: 'context.only("An exclusive context suite", () => {});',
            errors: [{ message: 'Ignored test case found' }],
        },
        {
            code: 'suite.skip("A skipped suite", () => {});',
            errors: [{ message: 'Ignored test case found' }],
        },
        {
            code: 'suite.only("An exclusive suite", () => {});',
            errors: [{ message: 'Ignored test case found' }],
        }]
});