# eslint-plugin-test-smells

`eslint-plugin-test-smells` is an ESLint plugin designed to detect common test smells in your test code. It helps improve the quality and maintainability of your tests by flagging problematic patterns.

## Installation

To install the plugin, run the following command:

```bash
npm install eslint-plugin-test-smells --save-dev
# or
yarn add eslint-plugin-test-smells --dev
```

## Configuration

After installing the plugin, you need to configure ESLint to use it. Create an eslint.config.mjs file at the root of your project with the following configuration:

```javascript
import testSmellsPlugin from "eslint-plugin-test-smells";

export default [
  {
    files: ["**/*.test.js"], // Define the pattern for test files here
    plugins: { "eslint-plugin-test-smells": testSmellsPlugin },
    rules: {
      "eslint-plugin-test-smells/assertion-roulette": "error",
      "eslint-plugin-test-smells/conditional-test-logic": "error",
      "eslint-plugin-test-smells/ignored-test": "error",
      "eslint-plugin-test-smells/exception-handling": "error",
      "eslint-plugin-test-smells/redundant-print": "error",
      "eslint-plugin-test-smells/sensitive-equality": "error",
    }
  }
];
```

### Available Rules

- `assertion-roulette`:  Detects multiple assertions in a single test block, making it difficult to identify failures.
- `conditional-test-logic`: Detects conditional logic in tests, which can lead to tests that are difficult to understand and maintain.
- `ignored-test`: Detects ignored tests (marked with `.skip` or `.only`), which can lead to incomplete test coverage.
- `exception-handling`: Enforces proper exception handling in test code.
- `redundant-print`: Detects unnecessary use of console.log or similar statements in tests.
- `resource-optimism`: Ensures that external resources are checked for existence before being used.
- `sensitive-equality`: Detects sensitive type comparisons that can cause unexpected failures.
- `sleepy-test`: Avoids the use of `setTimeout` in test code.
- `constructor-initialization`: Detects the use of constructors in test classes, suggesting initialization in `setUp` methods.
- `eager-test`:  Avoids calling multiple production methods in a single test.


### Example Configuration

Here is an example of how to configure eslint-plugin-test-smells for your project:

```javascript
import testSmellsPlugin from "eslint-plugin-test-smells";

export default [
  {
    files: ["**/*.test.js"], // Specify the pattern for test files
    plugins: { "eslint-plugin-test-smells": testSmellsPlugin },
    rules: {
      "eslint-plugin-test-smells/assertion-roulette": "error",
      "eslint-plugin-test-smells/conditional-test-logic": "error",
      "eslint-plugin-test-smells/ignored-test": "error",
      "eslint-plugin-test-smells/exception-handling": "error",
      "eslint-plugin-test-smells/redundant-print": "error",
      "eslint-plugin-test-smells/resource-optimism": "error",
      "eslint-plugin-test-smells/sensitive-equality": "error",
      "eslint-plugin-test-smells/sleepy-test": "error",
      "eslint-plugin-test-smells/constructor-initialization": "error",
      "eslint-plugin-test-smells/eager-test": "error",
    }
  }
];
```

### Customization

You can adjust which rules you want to apply and the pattern of the test files to be checked. In the example above, we are configuring ESLint to check all files with the `.test.js` extension and apply all available rules in the plugin.

## Contribuição

Contributions are welcome! If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/luissmonteiro/eslint-plugin-test-smells).

## License

This project is open-source and licensed under the MIT license. See the LICENSE file for more details.
