const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/conditional-test-logic');

const ruleTester = new RuleTester({parserOptions: { ecmaVersion: 6 }});

ruleTester.run('conditional-test-logic', rule, {
    valid: [
        {code: 'console.log("Hello, world!");'},
        {code: 'const message = "Hello, world!"; console.log(message);'},
        {code: 'function greet() { return "Hello, world!"; } console.log(greet());'},
        {code: 'const arr = [1, 2, 3]; arr.forEach(num => console.log(num));'},
        {code: 'const obj = { a: 1, b: 2 }; console.log(obj.a);'}
    ],

    invalid: [
        {
            code: 'if (true) { console.log("Hello, world!"); }',
            errors: [{
                message: 'Avoid using conditional test logic',
                type: 'CallExpression'
            }]
        },
        {
            code: 'let x = 10; if (x > 5) { console.log("x is greater than 5"); }',
            errors: [{
                message: 'Avoid using conditional test logic',
                type: 'CallExpression'
            }]
        },
        {
            code: 'const y = false; if (!y) { console.log("y is false"); }',
            errors: [{
                message: 'Avoid using conditional test logic',
                type: 'CallExpression'
            }]
        },
        {
            code: 'for (let i = 0; i < 10; i++) { if (i % 2 === 0) { console.log(i); } }',
            errors: [{
                message: 'Avoid using conditional test logic',
                type: 'CallExpression'
            }]
        },
        {
            code: 'switch (true) { case true: console.log("This is true"); break; }',
            errors: [{
                message: 'Avoid using conditional test logic',
                type: 'CallExpression'
            }]
        }
    ]
});