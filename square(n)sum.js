//Write a function that takes in an array, squares each element and sums all the results

function squareSum(numbers){
    let total = 0
    for(let i = 0; i < numbers.length; i++){
      total += Math.pow(numbers[i], 2)
    }
    return total
  }