# Flag sensitive equality comparisons (`sensitive-equality`)

## Description

This rule flags sensitive equality comparisons in the code. Sensitive equality comparisons involve comparing values that may have side effects or unexpected behaviors, such as calling `toString` on objects. These comparisons can lead to subtle bugs and unpredictable behavior.

## Problem

Sensitive equality comparisons, such as those involving `toString` or other methods that can have side effects, can lead to subtle bugs and unpredictable behavior. These comparisons can produce unexpected results, especially when dealing with complex objects or data structures. It is important to avoid such comparisons to ensure the reliability and predictability of the code.

### Example of incorrect code:

```javascript
const obj = { key: 'value' };

if (obj.toString() === '[object Object]') {
    // Do something
}

const str = 'test';

if (str.toString() === 'test') {
    // Do something
}
```
In these examples, equality comparisons involve calling toString, which can lead to unexpected results and subtle bugs.

### Impact

- Subtle Bugs: Sensitive equality comparisons can lead to subtle bugs that are difficult to diagnose and fix.
- Unpredictable Behavior: Comparisons involving methods with side effects, such as toString, can produce unpredictable behavior.
- Reduced Code Reliability: Code that relies on sensitive equality comparisons is less reliable and more prone to errors.


### Good Practices
- Avoid Sensitive Comparisons: Avoid using equality comparisons that involve methods with side effects, such as toString.
- Use Explicit Comparisons: Use explicit comparisons that do not rely on methods with side effects. Compare values directly whenever possible.
- Validate Data: Ensure that the data being compared is in a predictable and consistent format before performing equality comparisons.

### Example of correct code:

```javascript
const obj = { key: 'value' };

if (Object.prototype.toString.call(obj) === '[object Object]') {
    // Do something
}

const str = 'test';

if (str === 'test') {
    // Do something
}
```

In these examples, explicit comparisons are used, avoiding methods with side effects and ensuring predictable behavior.

### Conclusion

Avoiding sensitive equality comparisons helps prevent subtle bugs and ensures the reliability and predictability of the code. This rule helps enforce good practices for equality comparisons, improving the overall quality and robustness of the code.

### References and other sources: 

[text](https://testsmells.org/pages/testsmells.html#SensitiveEquality)

- NGUYEN, Hung Nguyen, Hoan Nguyen, Tung Nguyen, Anh Tien, Nguyen. (2012).
Detection of embedded code smells in dynamic web applications.

- DAMASCENO, H., Bezerra, C., Campos, D., Machado, I., Coutinho, E. (2023).
Test smell refactoring revisited: What can internal quality attributes and developers’
experience tell us?. Journal of Software Engineering Research and Development, 11(1),
13:1 – 13:16. https://doi.org/10.5753/jserd.2023.3195. 2018