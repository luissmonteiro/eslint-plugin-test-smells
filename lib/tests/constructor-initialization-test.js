const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/constructor-initialization');

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
});

ruleTester.run('constructor-initialization', rule, {
    valid: [
        {
            code: `
                class TestSuite {
                    setUp() {
                        this.value = 42;
                    }
                }
            `
        },
        {
            code: `
                class TestSuite {
                    beforeEach() {
                        this.config = {};
                    }
                }
            `
        }
    ],

    invalid: [
        {
            code: `
                class TestSuite {
                    constructor() {
                        this.value = 42;
                    }
                }
            `,
            errors: [{ message: 'Avoid using constructors in test classes; use setUp methods for initialization instead.' }]
        },
        {
            code: `
                class AnotherTest {
                    constructor() {
                        this.config = {};
                    }
                }
            `,
            errors: [{ message: 'Avoid using constructors in test classes; use setUp methods for initialization instead.' }]
        }
    ]
});
