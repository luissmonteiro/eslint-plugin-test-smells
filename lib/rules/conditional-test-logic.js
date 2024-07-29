module.exports = {
    meta: {
        type: "sugestion",

        docs: {
            description: "Avoid using conditional test logic",
            category: "Best Practices",
            recommended: true,
        },
        fixable: "code",
        schema: []
        },
        create: function (context) {

            function checkIfStatements(node) {
                
                let count = 0;

                if(node === null || node === undefined){
                    return 0;
                }

                if (node.type === "IfStatement"){return 1}

                    if(node){
                        count += checkIfStatements(node.parent);
                    }
                
                return count;


            }
            return {
                CallExpression: function(node) {
                    if(checkIfStatements(node) >= 1){
                        context.report({
                            node: node,
                            message: "Avoid using conditional test logic"
                        });
                    }
                }
            }

        }

};