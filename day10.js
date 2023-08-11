/* Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined. */

let once = function(fn) {
  let called = false; // Variable to track if fn has been called
  let result; // Variable to store the result of the first call
  
  return function(...args) {
      if (!called) {
          called = true;
          result = fn(...args); // Call the original function
          return result; // Return the result of the first call
      } else {
          return undefined; // Subsequent calls return undefined
      }
  };
};