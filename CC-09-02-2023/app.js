// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception


// P  - invalid if below 0 or above 12, will be integers within this range
// R  - should return the product of all positive intgers less than n
// E  - (3) should give 6, (4) should give 24
// P  - if n < 0 || n > 12, throw "RangeError", else let ans = 1, loop incrementing by 1, multiply each increment by ans and re-define the value of ans

function factorial(n){
  if(n < 0 || n > 12){
    throw "RangeError"
  }
  let ans = 1
  for(let i = 1; i <= n; i++){
    ans *= i
  }
  return ans
}


