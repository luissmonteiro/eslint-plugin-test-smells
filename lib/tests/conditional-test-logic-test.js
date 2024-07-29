const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/conditional-test-logic');

const ruleTester = new RuleTester();

ruleTester.run('conditional-test-logic', rule, {
    valid: [
        'console.log("Hello, world!");'
    ],

    invalid: [
        {
            code: 'if (true) {console.log("Hello, world!");}',
            errors: [{
                message: 'Avoid using conditional test logic',
                type: 'CallExpression'
            }]
        }
    ]
});