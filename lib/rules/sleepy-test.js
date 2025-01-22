module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Avoid using setTimeout in test code.',
            category: 'Best Practices',
            recommended: true,
            url: 'https://github.com/luissmonteiro/eslint-plugin-test-smells/blob/main/docs/rules/sleepy-test.md'
        },
        schema: [] // No configurable options
    },

    create: function (context) {
        const setTimeoutAliases = new Set(['setTimeout']);

        return {
            VariableDeclarator(node) {
                if (node.init && node.init.type === 'Identifier' && node.init.name === 'setTimeout') {
                    setTimeoutAliases.add(node.id.name);
                }
            },
            CallExpression(node) {
                const callee = node.callee;

                if (
                    (callee.type === 'Identifier' && setTimeoutAliases.has(callee.name)) ||
                    (callee.type === 'MemberExpression' && callee.property.name === 'setTimeout')
                ) {
                    context.report({
                        node: node,
                        message: 'Avoid using setTimeout in test code.'
                    });
                }
            }
        };
    }
};