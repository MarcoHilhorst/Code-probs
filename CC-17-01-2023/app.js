// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// A string of braces is considered valid if all braces are matched with the correct brace.
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
 
    let pairs = ['(', ')', '[', ']', '{', '}']
      let openBrackets = ['(', '{', '[']
      let expected = []
      let count = 0
     
      for(let i = 0; i < braces.length; i++){
        if(openBrackets.includes(braces[i])){
          //E.G if braces[i] is located at index 2 in pairs, pairs[3] will be added to expected.
          expected.unshift(pairs[pairs.indexOf(braces[i]) + 1])
          count += 1
        }else if(braces[i] === expected[0]){
          expected.shift()
          count -= 1
        }else{
          return false
        }
      }
      return count === 0 ? true : false
    }