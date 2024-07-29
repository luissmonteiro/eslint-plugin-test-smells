const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/redundant-print');

const ruleTester = new RuleTester();

ruleTester.run('redundant-print', rule, {
    valid: [
        {
            code: 'function sum(a,b){return a+b;};'
        }
    ],

    invalid: [
        {
            code: 'function sum(a,b){console.log(a+b); return a+b;} ',
            errors: [{
                message: 'Redundant console statement found',
                type: 'MemberExpression'
            }]
        }
    ]
});