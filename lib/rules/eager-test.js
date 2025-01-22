module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Extract all identifiers from CallExpressions within a BlockStatement.',
            category: 'Best Practices',
            recommended: true,
            url: 'https://github.com/luissmonteiro/eslint-plugin-test-smells/blob/main/docs/rules/eager-test.md'
        },
        schema: []
    },



    create: function (context) {
        const testIdentifiers = new Set([
            'expect', 'assert', 'should', 'toBe', 'toEqual', 'toBeTruthy', 'toBeFalsy', 
            'toContain', 'toBeGreaterThan', 'toBeGreaterThanOrEqual', 'toBeLessThan', 
            'toBeLessThanOrEqual', 'toThrow', 'toThrowError', 'toThrowErrorMatchingSnapshot', 
            'toThrowErrorMatchingInlineSnapshot', 'toBeInstanceOf'
        ]);
        return {
            CallExpression(node) {
                if (node.callee.name === 'test' || node.callee.name === 'it') {
                    const testFunction = node.arguments[1];
                    if (testFunction && testFunction.type === 'ArrowFunctionExpression') {
                        const methodNames = new Set();
                        const sourceCode = context.getSourceCode();
                        const tokens = sourceCode.getTokens(testFunction.body);

                        tokens.forEach(token => {
                            const parent = sourceCode.getNodeByRangeIndex(token.range[0]).parent;
                            if (parent.type === 'CallExpression' && parent.callee.name === token.value
                                && !testIdentifiers.has(token.value)
                            ) {
                                methodNames.add(token.value);
                            }
                        });
                        if (methodNames.size > 2) {
                            context.report({
                                node: node,
                                message: 'Avoid calling multiple production methods in a single test.',
                            });
                        }
                    }
                }
            }
        };
    }
};
