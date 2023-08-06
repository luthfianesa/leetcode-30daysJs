/* Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method. 
Constraints :
0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number */

let map = function (arr, fn) {
  let transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    transformedArray.push(fn(arr[i], i));
  }

  return transformedArray;
};

// Test Cases
// let arr = [1, 2, 3];
// let plusone = function (n) {
// return n + 1;
// };
// let result = map(arr, plusone);
// console.log(result); // Output: [2, 3, 4]

// let arr = [1, 2, 3];
// let plusI = function(n, i) {
// return n + i;
// };
// let result = map(arr, plusI);
// console.log(result); // Output: [1, 3, 5]

// let arr = [10, 20, 30];
// let constant = function() {
// return 42;
// };
// let result = map(arr, constant);
// console.log(result); // Output: [42, 42, 42]
