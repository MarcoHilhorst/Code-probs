// Given  a nested array (2D) with a size of m*n, find the sum of the smallest values in each element/row.
// Assume that the input will always be a non-empty array containing only positive numbers


function sumOfSmallest(arr) {
    let sum = 0
    arr.forEach(element => {
      sum += Math.min(...element) 
    })
    return sum
  }