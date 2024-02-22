// You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)


function score( dice ) {
    let store = {}
    let score = 0
    // iterate array, for every element add it as a property to the store object and increment the value by 1
    dice.forEach(element => store[element] = store[element] + 1 || 1)
    Object.keys(store).forEach(element => {
  
      // Case for 1s
      if(eval(element) === 1){
        while(store[element] > 0){
          if(store[element] > 2){
            score += 1000
            store[element] -= 3
          }  
          else {
            score += 100
            store[element] -= 1
          }
        }
      }
  
      // case for one or two 5s
      if(eval(element) === 5 && store[element] < 2){
        while(store[element] > 0){
          score += 50
          store[element] -= 1
        }
      }
  
      // Case for a tripple of all non 1 numbers
      if(store[element] > 2){
        score += element*100
      }
  
    })
    return score
  }
