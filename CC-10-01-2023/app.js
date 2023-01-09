// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'




// will never have the missing character first or last, I.E we will always have a character to start with
// all letters have a charcode / number represenation
// we will need to iterate through the array as we don't know where the missing character will be located
// Have a count that starts with the charCode for the first element of the array, increment from there. 
// when we come across a mis-match between the counter value we have found our missing character.


function findMissingLetter(array){
    let count = array[0].charCodeAt(0)
    let ans = ''
    array.forEach(element => {
      if(element.charCodeAt(0) !== count){
        console.log(String.fromCharCode(count))
        ans = String.fromCharCode(count)
      } else {
        count ++
      }
    })
    return ans
  }