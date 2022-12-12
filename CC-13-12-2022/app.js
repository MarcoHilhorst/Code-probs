// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume an empty string is an isogram. Ignore letter case.

function isIsogram(str){
    const check = [...new Set(str.toLowerCase())].join('')
    check === str.toLowerCase() ? true : false
  }

  isIsogram("Dermatoglyphics")
// true

isIsogram("aba")
// false