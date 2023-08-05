/* Write a function createCounter. 
It should accept an initial integer init. 
It should return an object with three functions.

The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it. */

let createCounter = function (init) {
  let count = init;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  function reset() {
    count = init;
    return count;
  }

  return {
    increment,
    decrement,
    reset,
  };
};

// Test Cases
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset());  // 5
console.log(counter.decrement()); // 4

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// const counter = createCounter(0);
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1
// console.log(counter.reset()); // 0
// console.log(counter.reset()); // 0
