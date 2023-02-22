// Write a function that takes in an integer as an arguemnt and returns the factorial of that number




function factorial(n){
    let num = 1
    for(let i = 1; i <= n; i++){
      num *= i
    }
    return num
  }