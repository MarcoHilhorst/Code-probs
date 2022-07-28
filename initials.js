// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let ans = ""
    let div = name.split(" ")
  for(let i = 0; i < div.length; i++){
    if(i === 0){
      ans += div[i].charAt(0) +"."
    }else{
      ans+= div[i].charAt(0)
    }
  }
  return ans.toUpperCase()
}

//needed to add uppercase for instances where names were given in lower case