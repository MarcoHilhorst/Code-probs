// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("")

function firstNonRepeatingLetter(s) {
    // Check for an empty string input
    if (s === "") return ""
    let splitArr = s.split('')
    // array to hold letters that have duplicates and be checked against further into the while loop
    let letters = []
    // While loop to iterate over the split array
    while(splitArr.length > 0){
      // variable to hold the current first letter in array
      let store = splitArr[0]
      // remove the first letter from array
      splitArr.shift()
      // check if the current letter has already been checked and thus added to the letters array.
      let alreadyChecked = letters.includes(store.toLowerCase())
      // check to see if the remaining part of the word contains the current letter in either lower or upper case
      let hasDup = splitArr.includes(store.toLowerCase()) || splitArr.includes(store.toUpperCase())
  
      // condition for a positive match
      if (!hasDup && !alreadyChecked){
        return store
      } 
      else if(splitArr.length >= 1){
        // forced lower case as we only want the letter, not it's case for this check
        letters.push(store.toLowerCase())
      }
      else {
        return ""
      }
      
    }
  
  }