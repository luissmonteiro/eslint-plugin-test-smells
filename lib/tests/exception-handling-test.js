const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/exception-handling');

const ruleTester = new RuleTester({parserOptions: { ecmaVersion: 6 }});

ruleTester.run('exception-handling', rule, {
    valid: [
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
            code: `
try {
                console.log("This is a try block");
            } catch (error) {
                console.log("An error occurred");
            }
            `,
            errors: [{
                message: 'Try to avoid exception handling',
                type: 'TryStatement'
            }]
        },
        {
            code: `
            function riskyOperation() {
                try {
                    performOperation();
                } catch (e) {
                    console.log("Operation failed");
                }
            }
            riskyOperation();
            `,
            errors: [{
                message: 'Try to avoid exception handling',
                type: 'TryStatement'
            }]
        },
        {
            code: `
            try {
                let result = riskyFunction();
                console.log(result);
            } catch (err) {
                console.log("Caught an exception: " + err.message);
            }
            `,
            errors: [{
                message: 'Try to avoid exception handling',
                type: 'TryStatement'
            }]
        },
        {
            code: `
            try {
                JSON.parse("invalid json");
            } catch (error) {
                console.log("Failed to parse JSON");
            } finally {
                console.log("Execution finished");
            }
            `,
            errors: [{
                message: 'Try to avoid exception handling',
                type: 'TryStatement'
            }]
        },
        {
            code: `
            try {
                let value = maybeThrow();
                console.log(value);
            } catch (e) {
                if (e instanceof TypeError) {
                    console.log("Type error occurred");
                } else {
                    console.log("Some other error occurred");
                }
            }
            `,
            errors: [{
                message: 'Try to avoid exception handling',
                type: 'TryStatement'
            }]
        }
    ]
});