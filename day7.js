/* Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method. */

let reduce = function (nums, fn, init) {
  // If the array is empty, return the initial value
  if (nums.length === 0) {
    return init;
  }

  // Initialize the accumulator with the initial value
  let accumulator = init;

  // Iterate through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Apply the reducer function to the accumulator and the current element
    accumulator = fn(accumulator, nums[i]);
  }

  // Return the final reduced value
  return accumulator;
};

// Test Cases
// let nums1 = [1, 2, 3, 4];
// let fn1 = function sum(accum, curr) {
  // return accum + curr;
// };
// let init1 = 0;

// let result1 = reduce(nums1, fn1, init1);
// console.log(result1); // Output should be 10

// const nums2 = [1, 2, 3, 4];
// const fn2 = (accum, curr) => accum + curr * curr;
// const init2 = 100;

// const result2 = reduce(nums2, fn2, init2);
// console.log(result2); // Output should be 130


const nums3 = [];
const fn3 = (accum, curr) => 0; // Always returns 0
const init3 = 25;

const result3 = reduce(nums3, fn3, init3);
console.log(result3); // Output should be 25