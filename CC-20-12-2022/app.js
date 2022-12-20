// Write a function which given a string will return the number of characters in the string that are not between a-m as a fraction of the total string length. 

//E.G 2/40

//Do not simplify the fraction

function printerError(s) {
    let err = 0
    s.split('').forEach(element => {
      console.log(err)
      if(element.charCodeAt(0) < 97 || element.charCodeAt(0) > 109){
        err ++
      }
    })
    return `${err}/${s.length}`
  }