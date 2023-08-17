/* Given an asynchronous function fn and a time t in milliseconds, 
return a new time limited version of the input function. 
fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, 
the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, 
the time limited function should reject with the string "Time Limit Exceeded". */

let timeLimit = function (fn, t) {
  return async function (...args) {
    const promise = fn(...args); // Start the original function

    // Create a promise that resolves after the specified time
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    // Use Promise.race() to wait for either the original function or timeout
    try {
      const result = await Promise.race([promise, timeoutPromise]);
      return result; // Resolve with the result of the original function
    } catch (error) {
      throw error; // Reject with "Time Limit Exceeded" if timeout occurred
    }
  };
};
