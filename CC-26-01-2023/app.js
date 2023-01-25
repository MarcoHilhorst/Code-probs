// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.




var isAnagram = function(test, original) {
    test = test.split('').sort((a, b) => a.localeCompare(b)).join('').toLowerCase()
    original = original.split('').sort((a, b) => a.localeCompare(b)).join('').toLowerCase()
    
    return test === original ? true : false
  };