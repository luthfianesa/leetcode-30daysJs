/* Write a function argumentsLength that returns the count of arguments passed to it.  */

let argumentsLength = function(...args) {
  return args.length;
};

// Test Cases
// console.log(argumentsLength(5)); // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3