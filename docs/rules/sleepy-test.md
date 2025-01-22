# Avoid using setTimeout in test code (`sleepy-test`)

## Description

This rule ensures that `setTimeout` is not used in test code. Using `setTimeout` in tests can lead to flaky tests that are unreliable and difficult to debug. Tests should be deterministic and should not rely on timing mechanisms that can introduce variability.

## Problem

Using `setTimeout` in test code can lead to several issues:

- **Flaky Tests**: Tests that rely on `setTimeout` can be flaky, meaning they may pass or fail intermittently depending on the timing and execution environment.
- **Unreliable Results**: Timing mechanisms can introduce variability in test results, making it difficult to reproduce and debug issues.
- **Increased Test Duration**: Using `setTimeout` can unnecessarily increase the duration of tests, leading to longer test runs and slower feedback loops.

### Example of incorrect code:

```javascript
test('uses setTimeout', () => {
    setTimeout(() => {
        expect(1 + 1).toBe(2);
    }, 1000);
});

it('uses setTimeout', function() {
    setTimeout(() => {
        expect(someFunction()).toBe(true);
    }, 500);
});
```

In these examples, setTimeout is used within test cases, leading to potential flakiness and unreliable results.

### Impact

- Flaky Tests: Tests that rely on setTimeout can pass or fail intermittently, making them unreliable.
- Difficult Debugging: Timing-related issues can be difficult to reproduce and debug, leading to increased development time and frustration.
- Longer Test Runs: Using setTimeout can increase the duration of tests, leading to longer test runs and slower feedback loops.

### Good Practices

- Use Promises or Async/Await: Use Promises or async/await to handle asynchronous code in tests. This ensures that tests are deterministic and do not rely on timing mechanisms.
- Mock Timers: Use timer mocks provided by test frameworks (e.g., Jest's jest.useFakeTimers()) to control and advance timers in a deterministic manner.
- Avoid Timing Dependencies: Avoid dependencies on timing mechanisms in tests. Ensure that tests are deterministic and can run reliably in any environment.

### Example of correct code:

```javascript
test('uses async/await instead of setTimeout', async () => {
    await new Promise(resolve => setImmediate(resolve));
    expect(1 + 1).toBe(2);
});

it('uses async/await for asynchronous code', async function() {
    const result = await someAsyncFunction();
    expect(result).toBe(true);
});

test('mocks timers', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    setTimeout(callback, 1000);
    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
});
```

In these examples, Promises, async/await, and timer mocks are used to handle asynchronous code in a deterministic manner, avoiding the issues associated with setTimeout.

### Conclusion
Avoiding the use of setTimeout in test code helps ensure that tests are reliable, deterministic, and easy to debug. This rule helps enforce good practices for handling asynchronous code in tests, improving the overall quality and reliability of the test suite.


### References and other sources: 

[TestSmells Org](https://testsmells.org/pages/testsmells.html#SleepyTest)

[Medium article](https://harith-sankalpa.medium.com/wait-do-not-sleep-f916e501878d)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018