//Given an integer as a parameter, write a function that rounds it to the next multiple of 5. Assume all inputs are valid integers. Input may be positive or negative.

function roundToNext5(n){
    return Math.ceil(n/5) * 5
  }