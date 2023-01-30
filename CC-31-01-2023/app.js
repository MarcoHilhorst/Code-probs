// Given an array of integers, return the smallest number that could be formed from these digits, ignoring duplicates
// examples of input -> output as follows:
// [5, 7, 5, 9, 7]  -> 579
// [4, 8, 1, 4]     -> 148


function minValue(values){
    let arr = [...new Set(values)].sort((a, b) => a - b).join('')
    return parseInt(arr)
  }