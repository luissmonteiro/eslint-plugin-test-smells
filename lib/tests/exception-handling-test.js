const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/exception-handling');

const ruleTester = new RuleTester();

ruleTester.run('exception-handling', rule, {
    valid: [
        {
            code: 'function foo() { console.log("Hello, world!"); }'
        }
    ],

    invalid: [
        {
            code: 'function foo() { try { console.log("Hello, world!"); } catch (e) {} }',
            errors: [{
                message: 'Try to avoid exception handling',
                type: 'TryStatement'
            }]
        }
    ]
});