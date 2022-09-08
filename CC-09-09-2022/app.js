// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!



function createPhoneNumber(numbers){
    numbers = numbers.join('')
    console.log(
        '(' + numbers.substring(0, 3) + ') '
        + numbers.substring(3, 6)
        +'-'
        + numbers.substring(6, 10))
    // console.log(`(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`)
}


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// first idea was to simply log it using a template literal which gets the job done, but isn't easy to read.
// refined it using .substring to split the array into the appropriate parts which is easier to read
