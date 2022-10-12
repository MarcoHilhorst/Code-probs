// you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//P: an integer will be passed in
//R: returns an integer 
//E: 9119 = 811181
//P: split the input into an array, for each element, square it, join back into a number

function squareDigits(num){
    let arr = Array.from(num.toString())
    console.log(Number(arr.map(n => n*n).join("")))
    return Number(arr.map(n => n= n*n).join(""))
  }

  squareDigits(9119)