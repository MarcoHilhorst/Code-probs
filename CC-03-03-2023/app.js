// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let ascending = [...array].sort((a, b) => a - b)
    let descending = [...array].sort((a, b) => b - a)
    let last = array.length -1
    
    if(array[0] === ascending[0] && array[last] === ascending[last]){
      return "yes, ascending"
    }else if(array[0] === descending[0] && array[last] === descending[last]){
      return "yes, descending"
    }else {
      return "no"
    }
  
  }