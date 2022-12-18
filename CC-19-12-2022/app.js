// Write a function that finds the next perfect square after the one that is passed as a parameter. If the parameter itself is not a perfect square, then return -1. Assume the parameter will be non-negative.


function findNextSquare(sq) {
    if(Number.isInteger(Math.sqrt(sq))){
      let ans = Math.sqrt(sq) + 1
      return ans * ans
    }else{
      return -1
    }
  }

  