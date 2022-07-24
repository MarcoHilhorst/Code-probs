//write a function that takes in a number and a string. The function should repeat the string a number of times equal to the input number.

function repeatStr (n, s) {
    let ans = ""
    for(let i = 0; i < n; i++){
      ans = ans + s
    }
    return ans
  }