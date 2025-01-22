# Flag redundant print statements (`redundant-print`)

## Description

This rule flags redundant `console.log` statements in the code. `console.log` statements are often used for debugging purposes during development, but they should be removed before pushing the code to production. Leaving `console.log` statements in the code can clutter the console output and potentially expose sensitive information.

## Problem

Leaving `console.log` statements in the code can lead to several issues:

- **Cluttered Console Output**: `console.log` statements can clutter the console output, making it harder to read and understand important messages.
- **Performance Impact**: Excessive logging can impact the performance of the application, especially in production environments.
- **Exposure of Sensitive Information**: `console.log` statements can inadvertently expose sensitive information, such as user data or internal application details.

### Example of incorrect code:

```javascript
function add(a, b) {
    console.log('Adding numbers:', a, b);
    return a + b;
}

const result = add(1, 2);
console.log('Result:', result);
```

In this example, console.log statements are used for debugging purposes and should be removed before pushing the code to production.


### Impact

- Cluttered Console Output: Redundant console.log statements can clutter the console output, making it harder to read and understand important messages.
- Performance Impact: Excessive logging can impact the performance of the application, especially in production environments.
- Exposure of Sensitive Information: console.log statements can inadvertently expose sensitive information, such as user data or internal application details.

### Good Practices

- Remove Debugging Statements: Remove console.log statements and other debugging statements before pushing the code to production.
- Use Proper Logging: Use a proper logging framework or library for logging important messages, with appropriate log levels (e.g., info, warn, error).
- Review Code for Debugging Statements: Regularly review the code for any leftover debugging statements and remove them.

### Example of correct code:

```javascript
function add(a, b) {
    return a + b;
}

const result = add(1, 2);
```

In this example, the console.log statements have been removed, resulting in cleaner and more maintainable code.


### Conclusion

Flagging redundant console.log statements helps ensure that the code is clean, maintainable, and free of unnecessary debugging statements. This rule helps maintain the integrity of the codebase by identifying and removing redundant print statements.

### References and other sources: 

[TestSmells Org](https://testsmells.org/pages/testsmells.html#RedundantPrint)

[Test Smells Catalog Docs](https://test-smell-catalog.readthedocs.io/en/latest/Test%20execution%20-%20behavior/Other%20test%20execution%20-%20behavior/Redundant%20Print.html)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018