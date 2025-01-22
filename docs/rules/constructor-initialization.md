# Avoid using constructors in test classes (`constructor-initialization`)

## Description

This rule ensures that constructors are not used in test classes for initialization. Instead, it suggests using `setUp` methods (or equivalent) for initialization. Using constructors in test classes can lead to less flexible and harder-to-maintain tests.

## Problem

When constructors are used in test classes for initialization, it can make the tests less flexible and harder to maintain. Constructors are called automatically when an instance of the class is created, which can lead to unintended side effects and make it difficult to control the initialization process. Using `setUp` methods (or equivalent) allows for more control and flexibility in the initialization process.

### Example of incorrect code:

```javascript
class MyTest {
    constructor() {
        this.value = 42;
    }

    testMethod() {
        expect(this.value).toBe(42);
    }
}
```

In this example, the constructor is used for initialization, which can lead to less flexible and harder-to-maintain tests.


### Impact

- Reduced Flexibility: Using constructors for initialization can make it difficult to control the initialization process, reducing the flexibility of the tests.
- Unintended Side Effects: Constructors are called automatically when an instance of the class is created, which can lead to unintended side effects.
- Harder to Maintain: Tests that use constructors for initialization can be harder to maintain, as changes to the initialization process require changes to the constructor.


### Good Practices

- Use setUp Methods for Initialization: Use setUp methods (or equivalent) for initialization instead of constructors. This allows for more control and flexibility in the initialization process.
- Separate Initialization from Test Logic: Keep the initialization logic separate from the test logic to make the tests easier to understand and maintain.
- Use Descriptive Method Names: Use descriptive method names for the setUp methods to provide context for the initialization process.


### Example of correct code:

```javascript
class MyTest {
    setUp() {
        this.value = 42;
    }

    testMethod() {
        expect(this.value).toBe(42);
    }
}
```

In this example, the setUp method is used for initialization, making the tests more flexible and easier to maintain.

### Conclusion

Avoiding the use of constructors in test classes for initialization improves the flexibility and maintainability of the tests. This rule helps ensure that initialization is done in setUp methods (or equivalent), preventing unintended side effects and making the test suite more maintainable.


### References and other sources: 

[text](https://testsmells.org/pages/testsmells.html#ConstructorInitialization)

[text](https://test-smell-catalog.readthedocs.io/en/latest/Design%20related/Not%20using%20test%20patterns/Constructor%20Initialization.html)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018