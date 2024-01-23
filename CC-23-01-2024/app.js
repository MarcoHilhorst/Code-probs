// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7


var findMissing = function (list) { 
    // Get the smallest shared difference for numbers in the array
    // Iterate array to find the missing value
    // return missing value 
     var difference = (list[list.length - 1] - list[0]) / list.length;
     // Iterate through the list to find the missing term
     for (var i = 1; i < list.length; i++) {
         if (list[i] !== list[0] + i * difference) {
             // If the current term is not as expected, return the missing term
             return list[0] + i * difference;
         }
     }
    
  }