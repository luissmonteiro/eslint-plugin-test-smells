module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Flag redundant print statements',
            category: 'Best Practices',
            recommended: true,
            url: 'https://github.com/luissmonteiro/eslint-plugin-test-smells/blob/main/docs/rules/redundant-print.md'
        },
        hasSuggestions: true,
        fixable: 'code',
        messages: {
            redundantPrint: 'Redundant console statement found',
        },
        schema: [],
    },

    create: function (context) {
        return {
            "MemberExpression": function(node) {
                if (node.object && node.object.name === 'console' && node.property && node.property.name === 'log') {
                    context.report({
                        node,
                        messageId: 'redundantPrint',
                        suggest: [
                            {
                                desc: 'Remove the console statement before pushing your code. For more information, visit: https://github.com/luissmonteiro/eslint-plugin-test-smells/blob/main/docs/rules/redundant-print.md',
                                fix(fixer) {
                                    const sourceCode = context.getSourceCode();
                                    const statement = node.parent;
                                    const tokenAfter = sourceCode.getTokenAfter(statement);
        
                                    let range = statement.range;
                                    if (tokenAfter && tokenAfter.value === ';') {
                                        range = [statement.range[0], tokenAfter.range[1]];
                                    }
        
                                    return fixer.removeRange(range);
                                }}
                        ],
                    });
                }
            }

        };
    },
};