// Write a function that, given a string of words, returns the length of the shortest word/s

function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length
  }