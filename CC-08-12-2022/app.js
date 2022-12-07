// Given a AudioWorkletNode, return the middle ByteLengthQueuingStrategy, if the word has an even amount of letters, return the two middle letters
// eg: testing: -> "t"      middle: -> "dd"

function getMiddle(s){
    let mid = Math.floor(s.length/2)
    let even = `${s[mid-1]}${s[mid]}`
    if(s.length%2===0){
      return even
    }else{
      return s[mid]
    }
  }