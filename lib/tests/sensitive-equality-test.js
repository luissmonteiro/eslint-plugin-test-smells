const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/sensitive-equality');

const ruleTester = new RuleTester({parserOptions: { ecmaVersion: 6 }});



ruleTester.run('sensitive-equality', rule, {
    valid: [
        {
            code: 'var left = "teste"; var right = "sensitiveValue"; if (left === right) { console.log("Sensitive equality comparison"); }'
        },
        {
            code: 'let a = 5; let b = 10; if (a === b) { console.log("Number comparison"); }'
        },
        {
            code: 'const obj1 = { key: "value" }; const obj2 = { key: "value" }; if (obj1.key === obj2.key) { console.log("Object key comparison"); }'
        },
        {
            code: 'const str1 = "hello"; const str2 = "world"; if (str1 === str2) { console.log("String comparison"); }'
        },
        {
            code: 'let isActive = true; let isEnabled = false; if (isActive === isEnabled) { console.log("Boolean comparison"); }'
        }
    ],

    invalid: [
        {
            code: 'var left = "teste"; var right = "sensitiveValue"; if (left.toString() === right.toString()) { console.log("Sensitive equality comparison"); }',
            errors: [{
                message: 'Try to avoid sensitive equality',
                type: 'BinaryExpression'
            }]
        },
        {
            code: 'let a = "123"; let b = 123; if (a == b.toString()) { console.log("Loose equality comparison"); }',
            errors: [{
                message: 'Try to avoid sensitive equality',
                type: 'BinaryExpression'
            }]
        },
        {
            code: 'const value1 = "42"; const value2 = 42; if (value1 === value2.toString()) { console.log("Type coercion in comparison"); }',
            errors: [{
                message: 'Try to avoid sensitive equality',
                type: 'BinaryExpression'
            }]
        },
        {
            code: 'let x = null; let y = "null"; if (x.toString() == y) { console.log("Null comparison"); }',
            errors: [{
                message: 'Try to avoid sensitive equality',
                type: 'BinaryExpression'
            }]
        }
    ]
});