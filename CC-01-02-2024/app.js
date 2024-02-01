// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

function orderWeight(strng) {

    // case for an empty or non-valid string input
    if(strng === "" || strng === "0") return ""
  
    // function to find the weight calculation
    const calcWeight = (n) => {
      let num = n.toString().split('').reduce((acc, c) => acc + parseInt(c), 0)
      return num
    }
  
    // function to create a pair with the weighted number and actual number
    const customSortKey = (number) => {
      return [calcWeight(number), number.toString()];
    }
  
    // take input and split into array, convert to number, sort by comparing the weighted number using customSortKey function.
    const weightList = strng.split(' ').map(Number).sort((a, b) => {
      const keyA = customSortKey(a)
      const keyB = customSortKey(b)
  
      // case for when they don't have the same weighting 
      if (keyA[0] !== keyB[0]){
        return keyA[0] - keyB[0]
      }
  
      // case for if weighted values are the same, then we want to return the smaller of the original weights
      else {
        return keyA[1].localeCompare(keyB[1])
      }
    })
  
    return weightList.join(' ')
  
  }