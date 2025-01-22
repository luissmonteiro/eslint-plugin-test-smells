# Avoid using assertion roulette (`assertion-roulette`)

## Description

This rule ensures that test blocks do not contain multiple assertions without clear context. Assertion roulette occurs when multiple assertions are made in a single test block, making it difficult to determine which assertion failed when a test fails. This can lead to confusion and make debugging more challenging.

## Problem

When a test block contains multiple assertions, it can be unclear which assertion caused the test to fail. This is especially problematic when the assertions are not clearly separated or do not provide enough context. This situation is known as assertion roulette.

### Example of incorrect code:

```javascript
test('does multiple operations', () => {
    expect(sum(1, 2)).toBe(3);
    expect(subtract(5, 2)).toBe(3);
});

it('performs multiple tasks', () => {
    const add = sum(1, 2);
    const sub = subtract(5, 2);
    expect(add).toBe(3);
    expect(sub).toBe(3);
});
```

In these examples, multiple assertions are made within a single test block, making it difficult to determine which assertion failed.

### Impact

- Confusion: When a test fails, it can be unclear which assertion caused the failure, leading to confusion and wasted time.
- Difficult Debugging: Multiple assertions without clear context make debugging more challenging, as developers need to investigate each assertion to identify the cause of the failure.
- Reduced Test Clarity: Tests with multiple assertions can be harder to read and understand, reducing the overall clarity of the test suite.

### Good Practices

- Single Assertion per Test: Aim to have a single assertion per test block. This makes it clear which condition is being tested and simplifies debugging.
- Descriptive Test Names: Use descriptive test names to provide context for the assertion being made.
- Separate Tests for Different Conditions: Separate tests for different conditions or scenarios to ensure that each test is focused and clear.

### Example of correct code:

```javascript
test('adds numbers', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts numbers', () => {
    expect(subtract(5, 2)).toBe(3);
});

it('checks addition result', function() {
    const add = sum(1, 2);
    expect(add).toBe(3);
});

it('checks subtraction result', function() {
    const sub = subtract(5, 2);
    expect(sub).toBe(3);
});
```

In these examples, each test block contains a single assertion, making it clear which condition is being tested and simplifying debugging.

### Conclusion

Avoiding assertion roulette by limiting the number of assertions in a single test block improves test clarity and simplifies debugging. This rule helps ensure that test blocks contain a single assertion, preventing confusion and making the test suite more maintainable.

### References and other sources: 

[Test Smells Catalog Docs](https://test-smell-catalog.readthedocs.io/en/latest/Test%20semantic-logic/Testing%20many%20things/Assertion%20Roulette.html)

[TestSmells Org](https://testsmells.org/pages/testsmells.html#AssertionRoulette)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018