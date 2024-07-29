const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/sensitive-equality');

const ruleTester = new RuleTester();

// describe('sensitive-equality rule', () => {
//     it('should report sensitive equality comparison for right value', async () => {
//         const eslint = new ESLint();
//         const code = `
//             const right = 'sensitiveValue';
//             if (left === right) {
//                 console.log('Sensitive equality comparison');
//             }
//         `;
//         const results = await eslint.lintText(code, { rules: { 'sensitive-equality': 'error' } });
//         assert.strictEqual(results[0].messages.length, 1);
//         assert.strictEqual(results[0].messages[0].message, 'Sensitive equality comparison detected');
//     });
// });



ruleTester.run('sensitive-equality', rule, {
    valid: [
        {
            code: 'var left = "teste"; var right = "sensitiveValue";if (left === right) {console.log("Sensitive equality comparison");}'
        }
    ],

    invalid: [
        {
            code: 'var left = "teste"; var right = "sensitiveValue";if (left.toString() === right.toString()) {console.log("Sensitive equality comparison");}',
            errors: [{
                message: 'Try to avoid sensitive equality',
                type: 'BinaryExpression'
            }]
        }
    ]
});