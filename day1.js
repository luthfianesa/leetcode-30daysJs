/* Write a function createHelloWorld. It should return a new function that always returns "Hello World" */
let createHelloWorld = function() {
  return function(...args) {
    result = "Hello World"
    return result
  }
}

// Test Case
const f = createHelloWorld()
console.log(f());
