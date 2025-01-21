module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Flag ignored test cases in test suites',
            category: 'Best Practices',
            recommended: true,
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            ignoredTest: 'Ignored test case found',
        },
        schema: [],
    },

    create: function (context) {
        function checkSkipExpressions(node) {
            if (node === null || node === undefined) {
                return 0;
            }
            const callee = node;


            if (
                (callee.type === "MemberExpression" &&
                  callee.object &&
                  (callee.object.name === "it" || callee.object.name === "describe") &&
                  (callee.property.name === "skip" || callee.property.name === "only")) ||
                (callee.type === "CallExpression" &&
                  callee.callee &&
                  callee.callee.type === "MemberExpression" &&
                  callee.callee.object &&
                  (callee.callee.object.name === "it" || callee.callee.object.name === "describe" 
                    || callee.callee.object.name === "test" || callee.callee.object.name === "context" 
                    || callee.callee.object.name === "suite") &&
                  (callee.callee.property.name === "skip" || callee.callee.property.name === "only"))){
                    return 1;
                  }

            return checkSkipExpressions(node.parent);
        }

        return {
            CallExpression: function (node) {
                if (checkSkipExpressions(node) >= 1) {
                    context.report({
                        node,
                        messageId: 'ignoredTest',
                        suggest: [
                            {
                                desc: 'Remove the ignored test case before pushing your code',
                                fix(fixer) {
                                    return fixer.remove(node);
                                }
                            }
                        ]
                    });
                }
            },
        };
        }

    }