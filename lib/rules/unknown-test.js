module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Ensure that test blocks contain at least one assertion.',
            category: 'Best Practices',
            recommended: true,
            url: 'https://github.com/luissmonteiro/eslint-plugin-test-smells/blob/main/docs/rules/unknown-test.md'
        },
        schema: []
    },

    create: function (context) {
        const assertionMethods = new Set([
            'expect', 'assert', 'should'
        ]);

        return {
            CallExpression(node) {
                if (node.callee.name === 'test' || node.callee.name === 'it') {
                    const testFunction = node.arguments[1];
                    if (testFunction && (testFunction.type === 'ArrowFunctionExpression' || testFunction.type === 'FunctionExpression')) {
                        let hasAssertion = false;

                        const checkAssertions = (body) => {
                            if (body.type === 'BlockStatement') {
                                body.body.forEach(statement => {
                                    if (statement.type === 'ExpressionStatement' && statement.expression.type === 'CallExpression') {
                                        const callee = statement.expression.callee;
                                        if (callee.type === 'Identifier' && assertionMethods.has(callee.name)) {
                                            hasAssertion = true;
                                        } else if (callee.type === 'MemberExpression' && callee.object.type === 'Identifier' && assertionMethods.has(callee.object.name)) {
                                            hasAssertion = true;
                                        } else if(callee.type === 'MemberExpression' && callee.object.type === 'CallExpression'
                                             && callee.object.callee.type==='Identifier' && assertionMethods.has(callee.object.callee.name)){
                                            hasAssertion = true;
                                        }
                                    }
                                });
                            }
                        };

                        checkAssertions(testFunction.body);

                        if (!hasAssertion) {
                            context.report({
                                node: node,
                                message: 'Test methods should include at least one assertion.'
                            });
                        }
                    }
                }
            }
        };
    }
};