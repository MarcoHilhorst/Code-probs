// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"



function spinWords(string){
    let words = string.split(" ")
    words.forEach((element, index) => {
        if(element.length > 4){
            words[index] = element.split("").reverse().join("")
        }
    })
    console.log(words.join(" "))
    return words
  }

spinWords("Hey fellow warriors") 
//   "Hey wollef sroirraw"

// Used a forEach loop to iterate through and reverse the words that matched the criteria. On reflection, .map would have worked quite nicely here too 