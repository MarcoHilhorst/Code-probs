// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// Assume that a = 1, b = 2 ... z = 26

function wordsToMarks(string){
    return [...string].map(letter => letter.charCodeAt(0)-96).reduce((acc, c) => acc + c, 0)
    
  }