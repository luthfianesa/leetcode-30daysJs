/* Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise. */

function memoize(fn) {
  const cache = new Map(); // Use a Map to store cached results

  return function (...args) {
      const key = args.toString(); // Convert the arguments to a string for use as a cache key

      if (cache.has(key)) {
          // If the result is already in the cache, return it
          return cache.get(key);
      } else {
          // Otherwise, compute the result using the original function
          const result = fn(...args);
          cache.set(key, result); // Cache the result
          return result;
      }
  };
}