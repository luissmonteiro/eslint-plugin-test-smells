# Enforce proper exception handling (`exception-handling`)

## Description

This rule ensures that exception handling is used appropriately in test code. It discourages the use of `try-catch` blocks within test cases, as they can hide errors and make tests less reliable. Proper exception handling practices should be followed to ensure that tests fail when unexpected errors occur.

## Problem

Using `try-catch` blocks within test cases can hide errors and make tests less reliable. When exceptions are caught and not properly handled, it can lead to false positives where tests pass even though there are underlying issues. This can result in undetected bugs and reduced confidence in the test suite.

### Example of incorrect code:

```javascript
test('handles exception', () => {
    try {
        someFunction();
    } catch (e) {
        // Handle exception
    }
    expect(true).toBe(true);
});

it('catches error', function() {
    try {
        anotherFunction();
    } catch (e) {
        // Handle error
    }
    assert.equal(true, true);
});
```


In these examples, try-catch blocks are used within test cases, which can hide errors and make the tests less reliable.

### Impact

- Hidden Errors: Using try-catch blocks within test cases can hide errors, leading to false positives and undetected bugs.
- Reduced Test Reliability: Tests that catch and handle exceptions may pass even when there are underlying issues, reducing the reliability of the test suite.
- False Sense of Security: When tests pass despite hidden errors, it can create a false sense of security and confidence in the code.

### Good Practices

- Avoid try-catch in Tests: Avoid using try-catch blocks within test cases. Let the test framework handle exceptions and report errors.
- Use Assertions for Error Handling: Use assertions to verify that errors are thrown when expected. Most test frameworks provide methods to assert that a function throws an error.
- Separate Error Handling Tests: Write separate tests to verify that error handling works as expected, without using try-catch blocks within the test cases.

### Example of correct code:

```javascript

test('throws an error', () => {
    expect(() => {
        someFunction();
    }).toThrow();
});

it('throws an error', function() {
    assert.throws(() => {
        anotherFunction();
    });
});
```
In these examples, assertions are used to verify that errors are thrown, making the tests more reliable and easier to understand.

### Conclusion


Avoiding the use of try-catch blocks within test cases improves test reliability and ensures that errors are properly reported. This rule helps enforce proper exception handling practices, preventing hidden errors and making the test suite more maintainable.

### References and other sources: 

[TestSmells Org](https://testsmells.org/pages/testsmells.html#ExceptionHandling)

[Test-Smells Ctalog](https://test-smell-catalog.readthedocs.io/en/latest/Issues%20in%20test%20steps/Issues%20in%20exception%20handling/Exception%20Handling.html)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018