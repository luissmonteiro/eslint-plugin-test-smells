# Ensure existence checks before using external resources (`resource-optimism`)

## Description

This rule ensures that external resources are checked for existence before being used. It flags instances where methods like `readFileSync`, `writeFileSync`, or `connect` are called without a preceding existence check such as `existsSync` or `isAvailable`. This helps prevent runtime errors and ensures that the code handles external resources safely.

## Problem

Using external resources without checking their existence can lead to runtime errors and unexpected behavior. For example, attempting to read a file that does not exist or connecting to a database that is unavailable can cause the application to crash or behave unpredictably. Ensuring that existence checks are performed before using external resources helps prevent these issues.

### Example of incorrect code:

```javascript
const fs = require('fs');

test('reads a file optimistically', () => {
    const data = fs.readFileSync('file.txt', 'utf-8');
    expect(data).toBeTruthy();
});

it('writes a file optimistically', () => {
    fs.writeFileSync('output.txt', 'Hello, World!');
    expect(fs.existsSync('output.txt')).toBe(true);
});

const db = require('database');

test('connects to a database optimistically', () => {
    const connection = db.connect();
    expect(connection).toBeDefined();
});
```

In these examples, external resources are used without checking their existence, which can lead to runtime errors.

### Impact


- Runtime Errors: Using external resources without checking their existence can cause runtime errors, leading to application crashes or unexpected behavior.
- Unreliable Code: Code that does not check for the existence of external resources is less reliable and more prone to failures.
- Poor User Experience: Runtime errors caused by missing resources can result in a poor user experience, as the application may crash or behave unpredictably.


### Good Practices


- Perform Existence Checks: Always perform existence checks before using external resources. Use methods like fs.existsSync or db.isAvailable to ensure that the resource is available before attempting to use it.
- Handle Errors Gracefully: In addition to performing existence checks, handle errors gracefully to ensure that the application can recover from missing resources without crashing.
- Write Defensive Code: Write defensive code that anticipates potential issues with external resources and handles them appropriately.

### Example of correct code:

```javascript
const fs = require('fs');

test('reads a file safely', () => {
    if (fs.existsSync('file.txt')) {
        const data = fs.readFileSync('file.txt', 'utf-8');
        expect(data).toBeTruthy();
    }
});

it('checks and writes a file safely', () => {
    if (!fs.existsSync('output.txt')) {
        fs.writeFileSync('output.txt', 'Hello, World!');
    }
    expect(fs.existsSync('output.txt')).toBe(true);
});

const db = require('database');

test('connects to a database safely', () => {
    if (db.isAvailable()) {
        const connection = db.connect();
        expect(connection).toBeDefined();
    }
});
```

In these examples, existence checks are performed before using external resources, ensuring that the code handles resources safely and reliably.

### Conclusion


Ensuring that external resources are checked for existence before being used helps prevent runtime errors and makes the code more reliable. This rule helps enforce good practices for handling external resources, improving the overall quality and robustness of the code.

### References and other sources: 

[TestSmells Org](https://testsmells.org/pages/testsmells.html#ResourceOptimism)

[Test Smells Catalog Docs](https://test-smell-catalog.readthedocs.io/en/latest/Dependencies/External%20dependencies/Resource%20Optimism.html)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018