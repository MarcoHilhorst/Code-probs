// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


//letters with a number score (a:1, b:2 etc)
// split a string into individual words, and again into individual letters
// calculate score of words, return the highest scoring
// can store the highest value and associated word for returning later
// will need to itterate over the string
// probably a nested loop


function high(x){
    let highScore = 0
    let ans = ''
    x.split(' ').forEach(element => { //this will cycle through whole words from the input string
      let currentScore = 0
      element.split('').forEach(letter => { // this will cycle through each letter for the selected word
        currentScore += letter.charCodeAt(0) - 96
      })
      if(currentScore > highScore){    // if we have a larger scoring word, store the word and the score
      highScore = currentScore
      ans = element
      }
    });
    return ans
  }