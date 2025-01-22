module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Ensure that external resources are checked for existence before use.',
            category: 'Best Practices',
            recommended: true,
            url: 'https://github.com/luissmonteiro/eslint-plugin-test-smells/blob/main/docs/rules/resource-optimism.md'
        },
        schema: []
    },

    create: function (context) {
        const resourceMethods = new Set([
            'readFileSync', 'writeFileSync', 'connect'
        ]);

        const existenceChecks = new Set([
            'existsSync', 'isAvailable'
        ]);

        return {
            CallExpression(node) {
                const callee = node.callee;

                if (callee.type === 'MemberExpression' && resourceMethods.has(callee.property.name)) {
                    let hasExistenceCheck = false;
                    let currentScope = context.getScope();

                    while (currentScope) {
                        for (const variable of currentScope.variables) {
                            for (const reference of variable.references) {
                                const parent = reference.identifier.parent;
                                if ((parent.type === 'CallExpression' && parent.callee.type === 'MemberExpression')
                                || (parent.type === 'MemberExpression')) {
                                        if(existenceChecks.has(parent.property.name)){
                                            hasExistenceCheck = true;
                                            break;
                                        }
                                    
                                }
                            }
                            if (hasExistenceCheck) break;
                        }
                        if (hasExistenceCheck) break;
                        currentScope = currentScope.upper;
                    }

                    if (!hasExistenceCheck) {
                        context.report({
                            node: node,
                            message: 'External resource method called without checking existence.'
                        });
                    }
                }
            }
        };
    }
};