// create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.



function gimme (triplet) {
    let test = Array.from(triplet)
    test = test.sort((a, b) => a -b)
     test.pop()
     test.shift()
     return triplet.indexOf(test[0])
}
   
   //needed to use Array.from, as other methods were also manipulating the input array/destructive instead of 'test' only