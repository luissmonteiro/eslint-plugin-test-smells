# Avoid calling multiple production methods in a single test (`eager-test`)

## Description

This rule ensures that test blocks do not call multiple production methods. Calling multiple production methods in a single test can make the test harder to understand and maintain. It can also make it difficult to determine which method caused the test to fail when a test fails.

## Problem

When multiple production methods are called in a single test block, it can make the test harder to read and understand. This situation is known as "eager testing."

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

In these examples, multiple production methods are called within a single test block, making it difficult to determine which method caused the test to fail.

### Impact


- Reduced Readability: Calling multiple production methods in a single test can make the test harder to read and understand.
- Difficult Debugging: When a test fails, it can be difficult to determine which method caused the failure, making debugging more challenging.
- Reduced Test Clarity: Tests that call multiple production methods can be harder to understand, reducing the overall clarity of the test suite.

### Good Practices

- Single Production Method per Test: Aim to call a single production method per test block. This makes it clear which method is being tested and simplifies debugging.
- Separate Tests for Different Methods: Write separate tests for different methods to ensure that each test is focused and clear.
- Use Descriptive Test Names: Use descriptive test names to provide context for the method being tested.

### Example of correct code

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

In these examples, each test block calls a single production method, making it clear which method is being tested and simplifying debugging.

### Conclusion

Avoiding the call of multiple production methods in a single test block improves test readability and simplifies debugging. This rule helps ensure that test blocks call a single production method, preventing confusion and making the test suite more maintainable.

### References and other sources: 
[Test Smells Catalog Docs](https://test-smell-catalog.readthedocs.io/en/latest/Test%20semantic-logic/Testing%20many%20things/Eager%20Test.html)

[TestSmells Org](https://testsmells.org/pages/testsmells.html#EagerTest)


- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018