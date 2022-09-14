// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function bin(n){
    let binary = []
    let total = 0
    let c = n
    while(c>0){
      c%2 === 0 ? binary.unshift(0) : binary.unshift(1)
      c = Math.floor(c/2)
    }
    binary.forEach(n => {
      total += n
    })
    return total
  }