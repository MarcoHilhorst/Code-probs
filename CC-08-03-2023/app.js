// create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
    let ans = []
    for(let i = 0; i < str.length; i++){
     split = str.split('')
     if(split[i].toLowerCase() !== split[i].toUpperCase()) {
      console.log("letter")
      split[i] = split[i].toUpperCase()
      ans.push(split.join(''))
     }
    }
    return ans
  }