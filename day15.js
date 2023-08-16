/* Given a function fn, an array of arguments args, 
and an interval time t, return a cancel function cancelFn.

The function fn should be called with args immediately 
and then called again every t milliseconds until cancelFn is called at cancelT ms. */

let cancellable = function(fn, args, t) {
  let intervalId;
  let remainingTime = t;
  
  const executeFn = () => {
      fn(...args);
      intervalId = setTimeout(executeFn, t);
  };

  const cancelFn = (cancelT) => {
      if (intervalId) {
          clearTimeout(intervalId);
          remainingTime = cancelT - Date.now();
          if (remainingTime > 0) {
              setTimeout(executeFn, remainingTime);
          }
          intervalId = undefined;
      }
  };

  executeFn();  // Call fn immediately

  return cancelFn;
};

