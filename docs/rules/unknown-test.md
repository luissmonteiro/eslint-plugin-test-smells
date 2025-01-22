# Ensure that test blocks contain at least one assertion (`unknown-test`)

## Description

This rule ensures that every test block (`test` or `it`) contains at least one assertion. Assertions are critical in tests as they verify that the code behaves as expected. Without assertions, tests are essentially no-ops and do not provide any value.

## Problem

When a test block does not contain any assertions, it does not verify any behavior or state. This can lead to false positives where tests pass without actually testing anything. Such tests can give a false sense of security and may allow bugs to go unnoticed.

### Example of incorrect code:

```javascript
test('does nothing', () => {
    sum(1, 2);
});

it('performs operations without assertions', () => {
    const result = subtract(5, 2);
});
```

In these examples, the test blocks do not contain any assertions, making them ineffective.

### Impact

- False Sense of Security: Tests without assertions can pass without verifying any behavior, leading to a false sense of security.
- Missed Bugs: Without assertions, tests cannot catch bugs or regressions in the code.
- Wasted Effort: Writing tests without assertions is a wasted effort as they do not provide any value.


### Good Practices
- Always include at least one assertion in every test block.
- Use assertion libraries like expect, assert, or should to verify the expected behavior or state.
- Ensure that the assertions are meaningful and cover the critical aspects of the code being tested.

Example of correct code:

```javascript
test('adds numbers', () => {
    expect(sum(1, 2)).toBe(3);
});

it('subtracts numbers', () => {
    const result = subtract(5, 2);
    assert.equal(result, 3);
});

test('checks boolean value', () => {
    expect(isTrue(true)).toBeTruthy();
});
```

In these examples, each test block contains at least one assertion, making them effective in verifying the expected behavior.

### Conclusion

Including assertions in test blocks is essential for effective testing. This rule helps ensure that every test block contains at least one assertion, preventing false positives and ensuring that tests provide value by verifying the expected behavior.

### References and other sources: 

[text](https://testsmells.org/pages/testsmells.html#UnknownTest)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018