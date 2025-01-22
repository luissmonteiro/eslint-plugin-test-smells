module.exports = {
    meta: {
        type: "sugestion",

        docs: {
            description: "Avoid using assertion roulette",
            category: "Best Practices",
            recommended: true,
            url: 'https://github.com/luissmonteiro/eslint-plugin-test-smells/blob/main/docs/rules/assertion-roulette.md'
        },
        fixable: "code",
        schema: []
        },
        create: function (context) {

            function checkAssertions(node) {
                let count = 0;
            
                if ((node.type === 'CallExpression' && node.callee.property && node.callee.property.name === 'toBe') 
                    || (node.type === 'CallExpression' && node.callee.property && node.callee.property.name === 'match')) {
                    count++;
                }

                if(!node.body){
                    return count;
                }
            
                for (let child of node.body) {
                    if (child.type === 'ExpressionStatement') {
                        count += checkAssertions(child.expression);
                    }
                }
            
                return count;
            }

            return {
                BlockStatement(node) {
                    const assertions = checkAssertions(node);
                    if (assertions >= 2) {
                        context.report({
                            node: node,
                            message: "Avoid using assertion roulette. For more information, visit https://github.com/luissmonteiro/eslint-plugin-test-smells/blob/main/docs/rules/assertion-roulette.md",
                        });
                    }
                }
            }




        }
    }

