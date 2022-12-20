//Write a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//The binary number returned should be a string.


//Assumptions, only positive integers will be passed as arguments
// addBinary(10, 2) -- > should return 1100

// add the two parameters
// check if the sum is even or odd, store "0" or "1" in an array based on this
// divide sum by 2 and round down, repeat/ recursive
// Stop when sum = 0
// join array to get a string and return it

function addBinary(a,b) {
    let sum = a + b
    let answer = [] 
    while(sum > 0){
      if(sum%2 === 0){
        answer.unshift("0")
        sum = sum/2
      }else{
        answer.unshift("1")
        sum = Math.floor(sum/2)
      }
    }
    return answer.join('') 
  }