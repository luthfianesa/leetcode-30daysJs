/* Write a class that allows getting and setting key-value pairs, 
however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, 
and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. 
The method should return true if the same un-expired key already exists and false otherwise. 
Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. 
Otherwise it should return -1.

count(): returns the count of un-expired keys. */

let TimeLimitedCache = function() {
  this.cache = {};
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  const currentTime = Date.now();
  
  if (this.cache[key] && this.cache[key].expiration > currentTime) {
      this.cache[key].value = value;
      this.cache[key].expiration = currentTime + duration;
      return true;
  }
  
  this.cache[key] = {
      value: value,
      expiration: currentTime + duration
  };
  
  return false;
};

TimeLimitedCache.prototype.get = function(key) {
  const currentTime = Date.now();
  
  if (this.cache[key] && this.cache[key].expiration > currentTime) {
      return this.cache[key].value;
  }
  
  return -1;
};

TimeLimitedCache.prototype.count = function() {
  const currentTime = Date.now();
  let count = 0;
  
  for (const key in this.cache) {
      if (this.cache[key].expiration > currentTime) {
          count++;
      }
  }
  
  return count;
};

// Need to fix