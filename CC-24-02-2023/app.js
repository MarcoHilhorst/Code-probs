// Write a function that takes an array of integers and returns an array that only contains even numbers. If there are no even numbers in the array return an empty array 

function getEvenNumbers(numbersArray){
    return numbersArray.filter(num => num%2 === 0)
  }