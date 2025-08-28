//
// L32S01 - Recursion
//Here’s a simple, interview-friendly explanation:
// Recursion is when a function calls itself
// to solve a smaller version of the same problem
// until it reaches a base case
//(a condition that stops the recursion)

function factorial(x) {
  // TERMINATION
  if (x < 0) return;

  // BASE
  if (x === 0) return 1;

  // RECURSION
  return x * factorial(x - 1);
}

gs.info(factorial(3)); // 6
