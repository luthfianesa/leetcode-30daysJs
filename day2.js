/* Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc) */

let createCounter = function(n) {
  let count = n
  return function() {
    return count++
  }
}

// Test Cases 
const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())
// counter() // 10
// counter() // 11
// counter() // 12