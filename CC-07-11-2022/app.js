// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr){
    let zeros = arr.filter(ele => ele === 0)
    let remainder = arr.filter(ele => ele !== 0)
    zeros.forEach(element => {
      remainder.push(element)
    })
    return remainder
  }

  //First one I tried used splice and didn't account for instances where two zeros would be side by side. This version filters the array into zeros and others, then adds the zeros to the end of the 'remainder' array.