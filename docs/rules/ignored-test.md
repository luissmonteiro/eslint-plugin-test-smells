# Flag ignored test cases in test suites (`ignored-test`)

## Description

This rule ensures that ignored test cases (e.g., tests marked with `.skip` or `.only`) are flagged. Ignored test cases can lead to incomplete test coverage and may hide potential issues in the code. It is important to address ignored tests to ensure that all test cases are executed and validated.

## Problem

Ignored test cases, such as those marked with `.skip` or `.only`, can lead to incomplete test coverage. When tests are skipped or focused, they may hide potential issues in the code and give a false sense of security. It is important to address these ignored tests to ensure that all test cases are executed and validated.

### Example of incorrect code:

```javascript
describe.skip('A skipped test suite', () => {
    it('should do something', () => {
        expect(true).toBe(true);
    });
});

it.skip('An ignored test case', () => {
    expect(true).toBe(true);
});

it.only('A focused test case', () => {
    expect(true).toBe(true);
});
```

In these examples, test cases are marked with .skip or .only, leading to incomplete test coverage.

### Impact 

- Incomplete Test Coverage: Ignored test cases result in incomplete test coverage, potentially hiding issues in the code.
- False Sense of Security: Skipped or focused tests can give a false sense of security, as not all test cases are executed.
- Missed Bugs: Ignored tests may hide bugs or regressions that would have been caught if the tests were executed.

### Good Practices:

- Avoid Skipping Tests: Avoid using .skip to skip test cases. If a test is not relevant, consider removing it or updating it to be relevant.
- Avoid Focusing Tests: Avoid using .only to focus on specific test cases. Ensure that all test cases are executed to maintain complete test coverage.
- Address Ignored Tests: Review and address ignored tests to ensure that all test cases are executed and validated.

### Example of correct code:

```javascript
describe('A test suite', () => {
    it('should do something', () => {
        expect(true).toBe(true);
    });
});

it('A test case', () => {
    expect(true).toBe(true);
});

test('A test case', () => {
    expect(true).toBe(true);
});
```
In these examples, all test cases are executed, ensuring complete test coverage and validation.


### Conclusion

Flagging ignored test cases helps ensure that all test cases are executed and validated, preventing incomplete test coverage and missed bugs. This rule helps maintain the integrity of the test suite by identifying and addressing ignored tests.

### References and other sources: 

[text](https://test-smell-catalog.readthedocs.io/en/latest/Code%20related/Violating%20coding%20best%20practices/Ignored%20Test.html)

[text](https://testsmells.org/pages/testsmells.html#IgnoredTest)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018