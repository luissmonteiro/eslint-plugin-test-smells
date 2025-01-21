/**
 * @fileoverview Rules for ESLint plugin that checks for test smells in test files.
 * @author Luis Monteiro
 */

"use strict";

//------------------------------------------------------------------------------
// Definition of the rules
//------------------------------------------------------------------------------


module.exports.rules = {
    'assertion-roulette': require('./rules/assertion-roulette'),
    'conditional-test-logic': require('./rules/conditional-test-logic'),
    'ignored-test': require('./rules/ignored-test'),
    'exception-handling': require('./rules/exception-handling'),
    'redundant-print': require('./rules/redundant-print'),
    'sensitive-equality': require('./rules/sensitive-equality'),
    'sleepy-test': require('./rules/sleepy-test'),
    'resource-optmism': require('./rules/resource-optimism'),
    'eager-test': require('./rules/eager-test'),
    'constructor-initialization': require('./rules/constructor-initialization'),
    'unknown-test': require('./rules/unknown-test'),
    
};