// Write a function that returns true or false depending on whether the givn input number is a Narcissistic number. A Narcissistic number is one which is the sum of its own digits, each raised to the power of the number of digits in the number.

//Example: 153 is a Narcissistic number.  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
    let num = 0
    let arr = (value + '').split('')
    arr.forEach(n => {
      num += n**arr.length
    })
    return num === value ? true : false
  }

  