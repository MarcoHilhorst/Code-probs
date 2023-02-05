// Given a string str, reverse it and omit all non-alphabetic characters. A string consists of lowercase latin letters, digits and symbols.

// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    let results = []
    str.split('').forEach(element => {
      if(element.charCodeAt(0) > 96 && element.charCodeAt(0) < 123){
        results.push(element)
      }
    })
    results = results.reverse().join('')
    return results
    
  }