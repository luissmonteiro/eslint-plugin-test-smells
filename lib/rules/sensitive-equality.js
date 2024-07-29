module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Flag sensitive equality comparisons',
            category: 'Best Practices',
            recommended: true,
        },
        fixable: null,
        schema: [],
    },

    create: function (context) {
        return {
            BinaryExpression: function (node) {
                if (node.operator === '==' || node.operator === '===') {
                    const left = context.getSourceCode().getText(node.left);
                    const right = context.getSourceCode().getText(node.right);

                    if (isSensitive(left) || isSensitive(right)) {
                        context.report({
                            node: node,
                            message: 'Try to avoid sensitive equality',
                        });
                    }
                }
            },
        };
    },
};


function isSensitive(value) {
    if(value.includes('toString')) {
        return true;}
    return false;
}