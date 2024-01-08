// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'

// Input should be between 1 and 3999
// inputs with 4 and 9 have a different numbering system (one before Num). 4 is written as IV instead of IIII

function solution(number){
    if(!(number > 0 && number < 4000)){
        console.error("Number not within range")
    }
    const numerals = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    }
    let ans = ''
    const sortedDescending = Object.keys(numerals).sort((a, b)=> b -a)
  
      sortedDescending.forEach(element => {
        console.log(number)
          while(number >= element){
              ans += numerals[element]
              number -= element
          }
      })
    return ans
    }

solution(1)
// 'I'

solution(4)
// 'IV'

solution(5000)
