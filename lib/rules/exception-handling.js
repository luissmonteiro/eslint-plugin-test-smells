module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce proper exception handling',
            category: 'Best Practices',
            recommended: true,
            url: 'https://github.com/luissmonteiro/eslint-plugin-test-smells/blob/main/docs/rules/exception-handling.md'
        },
        fixable: null,
        schema: [],
    },

    create: function (context) {

        function checkExceptions(node) {
            let count = 0;

            if(node === null || node === undefined){
                return 0;
            }

        if (node.type === "TryStatement"){return 1}

        if(node){
            count += checkExceptions(node.parent);
        }

        return count;

        }

        return {
            TryStatement: function (node) {
                if (checkExceptions(node) >=1) {
                    context.report({
                        node: node,
                        message: 'Try to avoid exception handling',
                    });
                }
            },
        };
    },
    }