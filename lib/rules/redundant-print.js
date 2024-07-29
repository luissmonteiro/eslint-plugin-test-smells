module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Flag redundant print statements',
            category: 'Best Practices',
            recommended: true,
        },
        fixable: null,
        schema: [],
    },

    create: function (context) {
        return {
            "MemberExpression": function(node) {
                if (node.object && node.object.name === 'console' && node.property && node.property.name === 'log') {
                    context.report({
                        node,
                        message: 'Redundant console statement found',
                    });
                }
            }

        };
    },
};