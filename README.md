# Unexpected String Concatenation in JavaScript

This example demonstrates a common error in JavaScript caused by its loose typing system.  The `foo` function is intended to add two numbers, but due to the implicit type coercion, it performs string concatenation when one of the arguments is a string.

## Bug
The `bug.js` file contains the buggy code.  The `bar` function calls `foo` with a number and a string, resulting in unexpected string concatenation instead of numerical addition. The output is `12` instead of the expected `3`.

## Solution
The `bugSolution.js` file shows how to fix the issue by using stricter type checking or explicit type conversion. This ensures that the addition operation behaves as intended.

## How to reproduce
1. Clone this repository.
2. Navigate to the directory containing `bug.js` and `bugSolution.js`.
3. Run `node bug.js` to observe the erroneous behavior.
4. Run `node bugSolution.js` to see the corrected output.

This example highlights the importance of careful type handling in JavaScript to avoid subtle bugs.