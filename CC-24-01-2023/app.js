// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//  for example 10 -> 1
//              -32 -> 5


function sumDigits(number) {
    let sum = 0
    number = Math.abs(number);
    while (number > 0) {
      sum += number % 10 
      number = Math.floor(number / 10) 
    }
    return sum
  }