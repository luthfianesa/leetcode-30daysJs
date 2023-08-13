/* Given two promises promise1 and promise2, return a new promise. 
promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers. */

let addTwoPromises = async function(promise1, promise2) {
  try {
      // Wait for both promises to resolve using Promise.all()
      const [result1, result2] = await Promise.all([promise1, promise2]);
      
      // Calculate the sum of the resolved values
      const sum = result1 + result2;
      
      // Create a new promise that resolves with the sum
      return Promise.resolve(sum);
  } catch (error) {
      // Handle any errors that may occur during promise resolution
      return Promise.reject(error);
  }
};