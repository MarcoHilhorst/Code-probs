// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
    let eyes = [':', ';']
    let noses = ['-', '~']
    let mouth = ['D', ')']
    let count = 0
    arr.forEach(element => {
      if(element.length === 3){
        if(eyes.includes(element[0]) && noses.includes(element[1]) && mouth.includes(element[2])){
          count++
        }
      }else if(element.length === 2){
        if(eyes.includes(element[0]) && mouth.includes(element[1])){
          count++
        }
      } 
    })
    return count
  }