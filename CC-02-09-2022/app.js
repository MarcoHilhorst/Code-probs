// Write a function that checks if a number is divisible by two numbers (x and y). All inputs will be positive non-zero numbers.

function isDivisible(n, x, y) {
  if(n%x===0 && n%y===0){
    return true
  }else{
    return false
  }
}