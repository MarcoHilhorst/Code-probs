// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//E.G   [0, 0, 0, 1] ==> 1
//      [0, 0, 1, 0] ==> 2
//      [0, 1, 0, 1] ==> 5

const binaryArrayToNumber = arr => {
    let num = 0
    arr.forEach(bit => {
      bit === 0 ? num = num*2 : num = num*2+1
    })
    return num
  };