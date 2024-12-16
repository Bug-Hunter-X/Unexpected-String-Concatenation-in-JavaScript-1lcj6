function foo(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);
  
  // Check for NaN after conversion 
  if (isNaN(a) || isNaN(b)) {
    return 0; // Handle invalid input gracefully
  }
  return a + b;
}

function bar() {
  console.log(foo(1, '2'));
}

bar(); // Output: 3