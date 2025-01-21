const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/redundant-print');

const ruleTester = new RuleTester({parserOptions: { ecmaVersion: 6 }});



ruleTester.run('redundant-print', rule, {
    valid: [
        {
            code: 'function sum(a, b) { return a + b; }'
        },
        {
            code: 'const greet = () => "Hello, world!";'
        },
        {
            code: 'function multiply(a, b) { return a * b; }'
        },
        {
            code: 'class Calculator { add(a, b) { return a + b; } }'
        },
        {
            code: 'const numbers = [1, 2, 3]; const doubled = numbers.map(n => n * 2);'
        }
    ],

    invalid: [
        {
            code: 'function sum(a, b) { console.log(a + b); return a + b }',
            errors: [{
                message: 'Redundant console statement found',
                suggestions: [
                    {
                        desc: 'Remove the console statement before pushing your code',
                        output: 'function sum(a, b) {  return a + b }'
                    }
                ]}]
                 
        },
        {
            code: 'function greet() { console.log("Hello!"); return "Hello!" }',
            errors: [{
                message: 'Redundant console statement found',
                type: 'MemberExpression',suggestions: [
                    {
                        desc: 'Remove the console statement before pushing your code',
                        output: 'function greet() {  return "Hello!" }'
                    }
                ]             }]
                
        },
        {
            code: 'const multiply = (a, b) => { console.log(a * b); return a * b; };',
            errors: [{
                message: 'Redundant console statement found',
                type: 'MemberExpression',
                suggestions: [
                {
                    desc: 'Remove the console statement before pushing your code',
                    output: 'const multiply = (a, b) => {  return a * b; };'
                }
            ] 
            }],
            
        },
        {
            code: 'class Logger { log(message) { console.log(message); return message; } }',
            errors: [{
                message: 'Redundant console statement found',
                type: 'MemberExpression',
                suggestions: [
                {
                    desc: 'Remove the console statement before pushing your code',
                    output: 'class Logger { log(message) {  return message; } }'
                }
            ]
            }],
             
        },
        {
            code: 'const nums = [1, 2, 3]; nums.forEach(n => { console.log(n); });',
            errors: [{
                message: 'Redundant console statement found',
                type: 'MemberExpression',
                suggestions: [
                {
                    desc: 'Remove the console statement before pushing your code',
                    output: 'const nums = [1, 2, 3]; nums.forEach(n => {  });'
                }
            ] 
            }],
            
        }
    ]
});