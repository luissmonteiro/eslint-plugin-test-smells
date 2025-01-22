# Avoid using conditional test logic (`conditional-test-logic`)

## Description

This rule ensures that test blocks do not contain conditional logic such as `if` statements or `switch` statements. Conditional logic in tests can lead to tests that are difficult to understand and maintain, and can hide potential issues in the code being tested.

## Problem

When conditional logic is used in test blocks, it can make the tests harder to read and understand. Conditional logic can also lead to tests that do not cover all possible scenarios, as some branches of the code may not be executed during the test run. This can result in missed bugs and reduced test coverage.

### Example of incorrect code:

```javascript
test('conditionally tests something', () => {
    if (someCondition) {
        expect(someFunction()).toBe(true);
    } else {
        expect(someFunction()).toBe(false);
    }
});

it('uses switch statement in test', () => {
    switch (someValue) {
        case 1:
            expect(someFunction()).toBe(1);
            break;
        case 2:
            expect(someFunction()).toBe(2);
            break;
        default:
            expect(someFunction()).toBe(0);
    }
});
```

In these examples, conditional logic is used within the test blocks, making the tests harder to understand and potentially missing some scenarios.

### Impact

- Reduced Readability: Conditional logic in tests can make the tests harder to read and understand.
- Missed Scenarios: Conditional logic can lead to tests that do not cover all possible scenarios, resulting in missed bugs.
- Inconsistent Test Results: Tests with conditional logic can produce inconsistent results depending on the conditions, making it harder to identify issues.

### Good Practices

- Separate Tests for Different Conditions: Write separate tests for different conditions or scenarios to ensure that each test is focused and clear.
- Avoid Conditional Logic in Tests: Avoid using if statements or switch statements in test blocks. Instead, write separate tests for each condition.
- Use Descriptive Test Names: Use descriptive test names to provide context for the condition being tested.

### Example of correct code:

```javascript
test('tests when condition is true', () => {
    expect(someFunction(true)).toBe(true);
});

test('tests when condition is false', () => {
    expect(someFunction(false)).toBe(false);
});

it('tests when value is 1', function() {
    expect(someFunction(1)).toBe(1);
});

it('tests when value is 2', function() {
    expect(someFunction(2)).toBe(2);
});

it('tests default case', function() {
    expect(someFunction(0)).toBe(0);
});
```

In these examples, each test block is focused on a single condition, making the tests easier to understand and ensuring that all scenarios are covered.

### Conclusion

Avoiding conditional logic in test blocks improves test readability and ensures that all scenarios are covered. This rule helps ensure that test blocks do not contain conditional logic, preventing missed bugs and making the test suite more maintainable.

### References and other sources: 

[TestSmells Org](https://testsmells.org/pages/testsmells.html#ConditionalTestLogic)

[Test Smells Catalog Docs](https://test-smell-catalog.readthedocs.io/en/latest/Test%20semantic-logic/Other%20test%20logic%20related/Conditional%20Test%20Logic.html)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018