// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Example:

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"


function diamond(n) {
    let ans = ""
  
    if (n % 2 === 0 || n < 1) {
      return null;
    }
  
    const addLine = (spaces, stars) => {
      ans += " ".repeat(spaces) + "*".repeat(stars) + '\n'
    }
    
    const numOfSpaces = Math.floor(n/2)
  
    for(let i = 0; i <= numOfSpaces; i++){
      let starNum = i * 2 + 1
      addLine(numOfSpaces - i, starNum)
    }
  
    for(let i = numOfSpaces - 1; i >= 0; i--){
      let starNum = i * 2 + 1
      addLine(numOfSpaces - i, starNum)
    }
  
    return ans
  }
  