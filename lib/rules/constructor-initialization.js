module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Detects constructor usage in test classes, suggesting initialization in setUp methods.',
            category: 'Best Practices',
            recommended: false
        },
        schema: [] 
    },
    create: function (context) {
        return {
            MethodDefinition(node) {
                if (
                    node.kind === 'constructor' &&
                    node.parent &&
                    node.parent.type === 'ClassBody' &&
                    node.parent.parent &&
                    node.parent.parent.type === 'ClassDeclaration'
                ) {
                    context.report({
                        node,
                        message: 'Avoid using constructors in test classes; use setUp methods for initialization instead.'
                    });
                }
            }
        };
    }
};
