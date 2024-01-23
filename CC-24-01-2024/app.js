// Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    const arr = text.split(" ")
    // function that will take in a word and return the encrypted version
    const encrypt = (word) => {
      let length = word.length
    // case for 1 letter word
      if(length === 1){
        return `${word.charCodeAt(0)}`
      }
    //case for 2 letter word 
      if (length === 2){
        return `${word.charCodeAt(0)}${word[1]}`
      }
      
    // case for words longer than two letters
      const ans = Array.from(word)
      ans[0] = word.charCodeAt(0)
      ans[1] = word[length-1]
      ans[length-1] = word[1]
      return ans.join('')
      
      
    }
    // join individual words back into a sentence
    return arr.map(encrypt).join(' ')
  
  }